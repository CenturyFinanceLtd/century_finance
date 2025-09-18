import React , {useEffect, useMemo, useState} from 'react';
import Footer from '../components/footer';
import PageTitle from '../components/pagetitle/PageTitle';
import { Link, useParams } from 'react-router-dom';
import { API_BASE } from '../utils/api';



function BlogDetails(props) {
    const { slug } = useParams();
    const API_BASE_URL = API_BASE;

    const apiHelpers = useMemo(() => ({
        base: API_BASE_URL,
        async getJson(path) {
            // try absolute backend first
            try {
                const abs = await fetch(`${API_BASE_URL}${path}`);
                if (abs.ok) return abs.json();
                // fall through to relative if 404/500
            } catch (_) { /* ignore and try relative */ }
            try {
                const rel = await fetch(path);
                if (rel.ok) return rel.json();
            } catch (_) { /* ignore */ }
            throw new Error(`Failed to load ${path}`);
        }
    }), [API_BASE_URL]);

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [recentPosts, setRecentPosts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);
                const [postJson, recentJson] = await Promise.all([
                    apiHelpers.getJson(`/api/blogs/${slug}`),
                    apiHelpers.getJson(`/api/blogs?limit=3`).catch(() => [])
                ]);
                setBlog(postJson);
                setRecentPosts(Array.isArray(recentJson) ? recentJson : []);

                // Try categories endpoint; if missing, compute from blogs list as a fallback
                try {
                    const catsJson = await apiHelpers.getJson(`/api/blogs/categories`);
                    setCategories(Array.isArray(catsJson) ? catsJson : []);
                } catch (_) {
                    try {
                        const allBlogs = await apiHelpers.getJson(`/api/blogs`);
                        const counts = {};
                        for (const b of Array.isArray(allBlogs) ? allBlogs : []) {
                            const cat = (b.category || 'General');
                            const key = String(cat).toLowerCase();
                            counts[key] = counts[key] || { category: cat, count: 0 };
                            counts[key].count += 1;
                        }
                        setCategories(Object.values(counts));
                    } catch (__) {
                        setCategories([]);
                    }
                }
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [slug]);

    return (
        <div>
            <PageTitle title={blog?.title || 'Blog Details'} />

            <section className="tf-blog">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="detail-inner">
                                {loading && <p>Loading...</p>}
                                {error && !loading && <p style={{color:'red'}}>Error: {error}</p>}
                                {blog && (
                                    <>
                                    <div className="image">
                                        {blog.coverImageUrl ? (
                                            <img style={{ width: '100%', height: '320px', objectFit: 'cover', background: '#eee', display: 'block' }} src={blog.coverImageUrl} alt={blog.title} />
                                        ) : (
                                            <div style={{ width: '100%', height: '320px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Image</div>
                                        )}
                                    </div>

                                    <div className="title">
                                        <h3>{blog.title}</h3>
                                        <Link className="category" to={`/blogs/category/${encodeURIComponent(blog.category || 'General')}`}>
                                            {blog.category || 'General'}
                                        </Link>
                                    </div>
                                    <div className="meta">
                                        <span className="admin"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0C8.51067 0 5.67188 2.8388 5.67188 6.32812C5.67188 9.81745 8.51067 12.6562 12 12.6562C15.4893 12.6562 18.3281 9.81745 18.3281 6.32812C18.3281 2.8388 15.4893 0 12 0Z" fill="#21E786"/>
                                            <path d="M19.8734 16.7904C18.1409 15.0313 15.8442 14.0625 13.4062 14.0625H10.5938C8.15588 14.0625 5.85909 15.0313 4.12659 16.7904C2.40258 18.5409 1.45312 20.8515 1.45312 23.2969C1.45312 23.6852 1.76794 24 2.15625 24H21.8438C22.2321 24 22.5469 23.6852 22.5469 23.2969C22.5469 20.8515 21.5974 18.5409 19.8734 16.7904Z" fill="#21E786"/>
                                            </svg>                                        
                                            {blog.author || 'Anonymous'}</span>
                                        <span className="date"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z" fill="#21E786"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2.58579 21.4142C2 20.8284 2 19.8856 2 18V13C2 12.5286 2 12.2929 2.14645 12.1464C2.29289 12 2.5286 12 3 12H21C21.4714 12 21.7071 12 21.8536 12.1464C22 12.2929 22 12.5286 22 13V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22H6C4.11438 22 3.17157 22 2.58579 21.4142ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z" fill="#21E786"/>
                                            <path d="M7 3L7 6" stroke="#21E786" strokeWidth="2" strokeLinecap="round"/>
                                            <path d="M17 3L17 6" stroke="#21E786" strokeWidth="2" strokeLinecap="round"/>
                                            </svg>                                        
                                            {new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}</span>
                                    </div>

                                    <div className="content-inner mb24">
                                        {blog.content ? (
                                            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                        ) : (
                                            <p>No content.</p>
                                        )}
                                    </div>
                                    </>
                                )}
                                {/* Optional widgets (tags/share/prev-next) can be added here if needed */}
    
                                <div id="comments">
                                    <h3 className="heading">LEAVE A REPLY</h3>
                                    <div className="sub-heading">Your email address will not be published. Required fields are marked</div>
                                    <form action="contact/contact-process.php" method="post" id="commentform"  className="comment-form">
                                        <fieldset className="name"><input type="text" id="name" placeholder="Name*" className="tb-my-input" name="name" tabIndex="2" aria-required="true" required="" /></fieldset>    
                                        <fieldset className="email"><input type="email" id="email" placeholder="Enter your email*" className="tb-my-input" name="email" tabIndex="2" aria-required="true" required="" /></fieldset>
                                        <fieldset className="phone"><input type="text" id="phone" placeholder="Phone Number*" className="tb-my-input" name="phone" tabIndex="2" aria-required="true" required="" /></fieldset>    
                                        <fieldset className="website"><input type="text" id="website" placeholder="Website" className="tb-my-input" name="website" tabIndex="2" aria-required="true" required="" /></fieldset>
                                        <fieldset className="message"><textarea id="message" name="message" rows="4" placeholder="Comment*" tabIndex="4" aria-required="true" required=""></textarea></fieldset><div className="btn-submit mg-t-36"><button className="tf-button" type="submit">SEND COMMENT</button></div></form></div>
                            </div> 
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-12">
                            <div className="side-bar">
                                <div className="widget widget-search">
                                    <form action="#">
                                        <input type="text" placeholder="Search NFT" required="" />
                                        <Link to className="btn-search"><i className="icon-fl-search-filled"></i></Link>
                                    </form>
                                </div>
                                <div className="widget widget-category">
                                    <h4 className="widget-title">CATEGORIES</h4>
                                    <ul>
                                        {categories.map((c) => {
                                            const isActive = (blog?.category || 'General').toLowerCase() === (c.category || '').toLowerCase();
                                            return (
                                                <li key={c.category} className={isActive ? 'active' : ''}>
                                                    <Link to={`/blogs/category/${encodeURIComponent(c.category)}`}>
                                                        {c.category} {c.count ? `(${c.count})` : ''}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <div className="widget widget-recent-post">
                                    <h4 className="widget-title">RECENT POSTS</h4>
                                    <ul>
                                        {recentPosts.map((p) => (
                                            <li key={p._id}>
                                                <div className="post-img">
                                                    {p.coverImageUrl ? (
                                                        <img style={{width:'70px', height:'70px', background:'#eee'}}  src={p.coverImageUrl} alt={p.title} />
                                                    ) : (
                                                        <div style={{width:'70px', height:'70px', background:'#eee'}} />
                                                    )}
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link to={`/blog/${p.slug}`}>{p.title}</Link></h6>
                                                    <div className="post-meta">
                                                        <span className="category">{p.category || 'General'}</span>
                                                        <span className="date">{new Date(p.publishedAt || p.createdAt).toLocaleDateString()}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                                <div className="widget widget-tag ">
                                    <h4 className="widget-title">TAGS</h4>
                                    <ul>
                                        {(blog?.tags || []).map((t) => (
                                            <li key={t}><Link to={`/blogs/tag/${encodeURIComponent(t)}`}>{t}</Link></li>
                                        ))}
                                        {(!blog?.tags || blog.tags.length === 0) && (
                                            <li>No tags</li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>         
                        
                    </div>
                </div>
            </section>

            <Footer />
            
        </div>
    );
}

export default BlogDetails;
