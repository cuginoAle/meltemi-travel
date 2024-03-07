'use client';
import { useCallback, useEffect, useState } from 'react';
import { Button } from '../button/button';

import style from './style.module.css';

import { Progress } from '../progress';
import { useAcCarousel } from 'use-ac-carousel';

interface Props {
  items: React.ReactNode[];
  title?: string;
  ariaLabel?: string;
  autoPlay?: number;
  slideWidth?: number;
  slidesPerPage?: number;
}

const safariAgent =
  typeof navigator === 'undefined'
    ? false
    : navigator.userAgent.indexOf('iPhone') > -1 ||
      navigator.userAgent.indexOf('iPad') > -1;

const MediaCarousel = ({
  items,
  title,
  ariaLabel,
  autoPlay,
  slideWidth = 300,
}: // slidesPerPage = 4,
Props) => {
  const [leftTwilightAreaWidth, setLeftTwilightAreaWidth] = useState('0px');
  const [rightTwilightAreaWidth, setRightTwilightAreaWidth] = useState('0px');
  const maxViewportWidth = 1280; //slideWidth * slidesPerPage + 16 * slidesPerPage;

  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const cssVars = {
    '--maxViewportWidth': maxViewportWidth + 'px',
    '--slideWidth': slideWidth + 'px',
  } as React.CSSProperties;

  const getTwilightAreaWidth = useCallback(
    (minWidth: number = 0) =>
      `${Math.max(
        minWidth,
        (document.documentElement.clientWidth - maxViewportWidth) / 2,
      )}px`,
    [maxViewportWidth],
  );

  const {
    scrollAreaRef,
    scrollNextPage,
    scrollPrevPage,
    isFirstPage,
    isLastPage,
    visibleIndexes,
    scrollToIndex,
    scrollAreaStyle,
  } = useAcCarousel({
    snapPosition: 'center',
    axis: 'x',
    scrollPadding: `0 ${rightTwilightAreaWidth} 0 ${leftTwilightAreaWidth}`,
    rootMargin: safariAgent
      ? undefined
      : `0px -${rightTwilightAreaWidth} 0px -${leftTwilightAreaWidth}`, // Comment this line out in Safari or iOS
    // webkit bug: https://bugs.webkit.org/show_bug.cgi?id=263316
    // https://github.com/w3c/IntersectionObserver/issues/504
    // https://stackoverflow.com/questions/71283704/intersection-observer-padding-changes-boundaries-of-root-element
  });

  const onTick = useCallback(() => {
    if (isLastPage) {
      scrollToIndex(0);
    } else scrollNextPage();
  }, [isLastPage, scrollNextPage, scrollToIndex]);

  useEffect(() => {
    setLeftTwilightAreaWidth(getTwilightAreaWidth());
    setRightTwilightAreaWidth(getTwilightAreaWidth(slideWidth));

    const handleResize = () => {
      setRightTwilightAreaWidth(getTwilightAreaWidth(60));
      setLeftTwilightAreaWidth(getTwilightAreaWidth(10));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getTwilightAreaWidth, slideWidth]);

  return (
    <div
      style={cssVars}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className={style.carouselWrapper}>
        <h2 className={style.carouselTitle}>{title}</h2>
        <ul
          aria-label={ariaLabel}
          ref={scrollAreaRef}
          className={style.scrollArea}
          style={{
            ...scrollAreaStyle,
            padding: `8px ${rightTwilightAreaWidth} 8px ${leftTwilightAreaWidth}`,
          }}
        >
          {items.map((item, index) => (
            <li key={index} className={style.li}>
              <div
                className={`${style.liInnerWrapper} ${
                  visibleIndexes.includes(index) ? style.visible : ''
                }`}
              >
                {typeof item === 'string' ? (
                  <a href="" key={index} className={style.slideAnchor}>
                    <img
                      className={style.img}
                      src={item}
                      alt=""
                      loading="lazy"
                    />
                    <div className={style.copyWrapper}>
                      <h2 className={style.slideTitle}>Slide title here</h2>
                      <p className="font-light text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia voluptatibus, voluptate molestias.
                      </p>
                    </div>
                  </a>
                ) : (
                  item
                )}
              </div>
            </li>
          ))}
        </ul>

        <div
          className={`${style.twilightArea} ${style.leftTwilightArea}`}
          style={{
            width: leftTwilightAreaWidth,
          }}
        />
        <div
          className={`${style.twilightArea} ${style.rightTwilightArea}`}
          style={{
            width: rightTwilightAreaWidth,
          }}
        >
          <>
            <Button
              disabled={isFirstPage}
              onClick={scrollPrevPage}
              className={`${style.navButton} ${style.prevButton}`}
            >
              &#8249;
            </Button>

            <Button
              disabled={isLastPage}
              onClick={scrollNextPage}
              className={`${style.navButton} ${style.nextButton}`}
            >
              &#8250;
            </Button>
            {!!autoPlay && (
              <Progress
                className={style.progress}
                isRunning={!isHovering && !isFocused && !!autoPlay}
                interval={autoPlay}
                onComplete={onTick}
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export { MediaCarousel };
