import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles.scss";

function PlacementTrack({ tracks, title, description, className }) {
  const sliderRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const isJumpingRef = useRef(false);

  const trackList = tracks ?? [];

  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.matchMedia("(max-width: 767px)").matches);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const sliderItems = useMemo(() => {
    const baseItems = trackList.map((track, index) => ({
      track,
      key: track.slug ?? `track-${index}`,
      actualIndex: index,
      isClone: false,
    }));

    if (!isMobileView || baseItems.length === 0) {
      return baseItems;
    }

    const last = baseItems[baseItems.length - 1];
    const first = baseItems[0];

    return [
      {
        track: last.track,
        key: `${last.key}-clone-head`,
        actualIndex: last.actualIndex,
        isClone: true,
      },
      ...baseItems,
      {
        track: first.track,
        key: `${first.key}-clone-tail`,
        actualIndex: first.actualIndex,
        isClone: true,
      },
    ];
  }, [isMobileView, trackList]);

  useEffect(() => {
    const node = sliderRef.current;
    if (!node) {
      return;
    }

    const slides = Array.from(node.children ?? []);
    if (isMobileView) {
      if (slides.length > 1) {
        node.scrollTo({ left: slides[1].offsetLeft, behavior: "auto" });
      }
      setActiveSlide(0);
    } else {
      node.scrollTo({ left: 0, behavior: "auto" });
      setActiveSlide(0);
    }
  }, [isMobileView, sliderItems.length]);

  useEffect(() => {
    const node = sliderRef.current;
    if (!node) {
      return;
    }

    const handleScroll = () => {
      if (isJumpingRef.current) {
        return;
      }

      const slides = Array.from(node.children ?? []);
      if (!slides.length) {
        return;
      }

      const distances = slides.map((slide) => Math.abs(slide.offsetLeft - node.scrollLeft));
      const minDistance = Math.min(...distances);
      const nearestIndex = distances.indexOf(minDistance);
      const item = sliderItems[nearestIndex];
      const total = trackList.length;

      if (item) {
        setActiveSlide(item.actualIndex);
      }

      if (isMobileView && total > 0) {
        const jumpTo = (targetIndex) => {
          const slidesList = Array.from(node.children ?? []);
          const target = slidesList[targetIndex];
          if (!target) {
            return;
          }
          isJumpingRef.current = true;
          node.classList.add("is-looping");
          requestAnimationFrame(() => {
            node.scrollTo({ left: target.offsetLeft, behavior: "auto" });
            requestAnimationFrame(() => {
              isJumpingRef.current = false;
              node.classList.remove("is-looping");
            });
          });
        };

        const slidesCount = slides.length;
        if (nearestIndex === 0) {
          jumpTo(total);
          return;
        }
        if (nearestIndex === slidesCount - 1) {
          jumpTo(1);
        }
      }
    };

    node.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      node.removeEventListener("scroll", handleScroll);
      node.classList.remove("is-looping");
      isJumpingRef.current = false;
    };
  }, [isMobileView, sliderItems, trackList.length]);

  const handleDotClick = (index) => {
    const node = sliderRef.current;
    if (!node) {
      return;
    }

    const slides = Array.from(node.children ?? []);
    const targetIndex = isMobileView ? index + 1 : index;
    const target = slides[targetIndex];
    if (!target) {
      return;
    }

    node.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    setActiveSlide(index);
  };

  if (!trackList.length) {
    return null;
  }

  return (
    <section className={`tf-section series-cards ${className ?? ""}`.trim()}>
      <div className="tf-container">
        <div className="tf-heading align-center">
          <h2 className="heading">{title}</h2>
          {description ? <p className="sub-heading">{description}</p> : null}
        </div>
        <div className="series-grid" ref={sliderRef}>
          {sliderItems.map((item, slideIndex) => {
            const { track, key, actualIndex } = item;
            const total = trackList.length || 1;
            const prevIndex = (activeSlide - 1 + total) % total;
            const nextIndex = (activeSlide + 1) % total;

            let positionClass = "";
            if (actualIndex === activeSlide) {
              positionClass = "is-active";
            } else if (actualIndex === prevIndex) {
              positionClass = "is-before";
            } else if (actualIndex === nextIndex) {
              positionClass = "is-after";
            }

            return (
              <article
                key={key}
                className={`series-card ${track.featured ? "featured" : ""} ${positionClass}`.trim()}
                data-slide-index={slideIndex}
              >
                {track.badge ? <span className="series-badge">{track.badge}</span> : null}
                <div className="series-header">
                  <h3>{track.name}</h3>
                  {track.summary ? <p className="series-summary">{track.summary}</p> : null}
                </div>
                <div className="series-body">
                  {track.focus ? <p className="series-focus">{track.focus}</p> : null}
                  {Array.isArray(track.features) && track.features.length ? (
                    <ul className="series-features">
                      {track.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <Link className="series-link" to={`/our-courses/${track.slug}`}>
                  Explore track
                </Link>
              </article>
            );
          })}
        </div>
        {isMobileView ? (
          <div className="series-dots" role="tablist" aria-label="Course series selector">
            {trackList.map((track, index) => (
              <button
                key={track.slug ?? `dot-${index}`}
                type="button"
                className={`dot ${activeSlide === index ? "active" : ""}`.trim()}
                aria-label={`Go to ${track.name}`}
                aria-selected={activeSlide === index}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

PlacementTrack.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
      badge: PropTypes.string,
      featured: PropTypes.bool,
      summary: PropTypes.string,
      focus: PropTypes.string,
      features: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

PlacementTrack.defaultProps = {
  className: "",
  description:
    "Pick a specialised series to explore detailed syllabi, mentor roster, and the complete course catalogue.",
  title: "Choose Your Placement Track",
  tracks: [],
};

export default PlacementTrack;