'use client';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Button } from '../button/button';

import style from './style.module.css';

import { Progress } from '../progress';
import { useAcCarousel } from 'use-ac-carousel';
import { Grandstander } from 'next/font/google';

const titleFont = Grandstander({
  variable: '--font-grandstander',
  subsets: ['latin'],
});

interface Props {
  items: React.ReactNode[];
  title?: string;
  ariaLabel?: string;
  autoPlay?: number;
  slideWidth?: number;
  slidesPerPage?: number;
  extraPadding?: number;
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
  extraPadding = 10,
}: // slidesPerPage = 4,
Props) => {
  const [leftTwilightAreaWidth, setLeftTwilightAreaWidth] =
    useState(extraPadding);
  const [rightTwilightAreaWidth, setRightTwilightAreaWidth] =
    useState(extraPadding);
  const maxViewportWidth = 1280; //slideWidth * slidesPerPage + 16 * slidesPerPage;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [showNavButtons, setShowNavButtons] = useState(false);

  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const cssVars = {
    '--maxViewportWidth': maxViewportWidth + 'px',
    '--slideWidth': slideWidth + 'px',
    visibility: 'hidden',
  } as React.CSSProperties;

  const getTwilightAreaWidth = useCallback(
    (minWidth: number = 0) =>
      Math.max(
        minWidth,
        (document.documentElement.clientWidth - maxViewportWidth) / 2,
      ),
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
    scrollPadding: `0 ${rightTwilightAreaWidth}px 0 ${leftTwilightAreaWidth}px`,
    rootMargin: safariAgent
      ? undefined
      : `0px -${rightTwilightAreaWidth}px 0px -${leftTwilightAreaWidth}px`, // Comment this line out in Safari or iOS
    // webkit bug: https://bugs.webkit.org/show_bug.cgi?id=263316
    // https://github.com/w3c/IntersectionObserver/issues/504
    // https://stackoverflow.com/questions/71283704/intersection-observer-padding-changes-boundaries-of-root-element
  });

  const onTick = useCallback(() => {
    if (isLastPage) {
      scrollToIndex(0);
    } else scrollNextPage();
  }, [isLastPage, scrollNextPage, scrollToIndex]);

  useLayoutEffect(() => {
    const handleResize = () => {
      // get the screen width
      const screenWidth = document.documentElement.clientWidth;

      const shouldShowNavButtons =
        screenWidth > 768 && items.length > visibleIndexes.length;

      setShowNavButtons(shouldShowNavButtons);

      setRightTwilightAreaWidth(
        getTwilightAreaWidth(shouldShowNavButtons ? 60 : 10),
      );
      setLeftTwilightAreaWidth(getTwilightAreaWidth(10));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    wrapperRef.current!.style.visibility = 'visible';

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getTwilightAreaWidth, slideWidth, items.length, visibleIndexes.length]);

  return (
    <div
      ref={wrapperRef}
      style={cssVars}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      <div className={style.carouselWrapper}>
        <h2 className={`${style.carouselTitle} ${titleFont.className}`}>
          {title}
        </h2>

        <div className={style.mainContent}>
          <ul
            aria-label={ariaLabel}
            ref={scrollAreaRef}
            className={style.scrollArea}
            style={{
              ...scrollAreaStyle,
              padding: `8px ${rightTwilightAreaWidth + extraPadding}px 8px ${
                leftTwilightAreaWidth + extraPadding
              }px`,
            }}
          >
            {items.map((item, index) => (
              <li key={index} className={style.li}>
                <div
                  className={`${style.liInnerWrapper} ${
                    visibleIndexes.includes(index) ? style.visible : ''
                  }`}
                >
                  {item}
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
            {showNavButtons && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MediaCarousel };
