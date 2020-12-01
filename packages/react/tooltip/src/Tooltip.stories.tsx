import * as React from 'react';
import { Tooltip, TooltipTrigger, TooltipPopper, TooltipContent, TooltipArrow } from './Tooltip';
import { Arrow } from '@interop-ui/react-arrow';
import { styled, css } from '../../../../stitches.config';

export default { title: 'Components/Tooltip' };

export const Styled = () => (
  <Tooltip>
    <TooltipTrigger as={StyledTrigger} style={{ margin: 100 }}>
      Hover or Focus me
    </TooltipTrigger>
    <TooltipPopper as={StyledPopper} sideOffset={5}>
      <TooltipContent as={StyledContent} aria-label="Even better done this way!">
        Nicely done!
      </TooltipContent>
      <TooltipArrow as={StyledArrow} offset={10} />
    </TooltipPopper>
  </Tooltip>
);

export const Controlled = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Tooltip isOpen={isOpen} onIsOpenChange={setIsOpen}>
      <TooltipTrigger style={{ margin: 100 }}>
        I'm controlled, look I'm {isOpen ? 'open' : 'closed'}
      </TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>Nicely done!</TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>
  );
};

export const CustomContent = () => (
  <div style={{ display: 'flex', gap: 20, padding: 100 }}>
    <Tooltip>
      <TooltipTrigger>Heading</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          <h1>Some heading</h1>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>Paragraph</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          <p>Some paragraph</p>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>List</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>Article</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          <article>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quae qui. Magnam
            delectus ex totam repellat amet distinctio unde, porro architecto voluptatibus nemo et
            nisi, voluptatem eligendi earum autem fugit.
          </article>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>Figure</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          <figure style={{ margin: 0 }}>
            <img
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              alt=""
              width={100}
            />
            <figcaption>Colm Tuite</figcaption>
          </figure>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>Time</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          {/* @ts-ignore */}
          <time datetime="2017-10-31T11:21:00+02:00">Tuesday, 31 October 2017</time>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>Link</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          View in <a href="https://modulz.app">Modulz</a>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>Form</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          <form>
            <label htmlFor="fname">First name:</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
            <label htmlFor="lname">Last name:</label>
            <br />
            <input type="text" id="lname" name="lname" />
          </form>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger>Mini layout</TooltipTrigger>
      <TooltipPopper as={StyledPopper} sideOffset={5}>
        <TooltipContent as={StyledContent}>
          <p
            style={{
              margin: 0,
              textAlign: 'center',
              fontFamily: 'apple-system, BlinkMacSystemFont, helvetica, arial, sans-serif',
              fontSize: 14,
            }}
          >
            Start video call
            <span style={{ display: 'block', color: '#999' }}>
              press{' '}
              <kbd
                style={{
                  fontFamily: 'apple-system, BlinkMacSystemFont, helvetica, arial, sans-serif',
                  fontWeight: 'bold',
                  color: 'white',
                }}
                aria-label="c key"
              >
                c
              </kbd>
            </span>
          </p>
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>
  </div>
);

export const Positions = () => (
  <div
    style={{
      display: 'flex',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(5, 50px)',
      }}
    >
      <SimpleTooltip label="Top start" side="top" align="start">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '2', gridRow: '1' }}>
          Top start
        </TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip label="Top center" side="top" align="center">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '3', gridRow: '1' }}>
          Top center
        </TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip label="Top end" side="top" align="end">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '4', gridRow: '1' }}>
          Top end
        </TooltipTrigger>
      </SimpleTooltip>

      <SimpleTooltip label="Right start" side="right" align="start">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '5', gridRow: '2' }} tabIndex={0}>
          Right start
        </TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip label="Right center" side="right" align="center">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '5', gridRow: '3' }} tabIndex={0}>
          Right center
        </TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip label="Right end" side="right" align="end">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '5', gridRow: '4' }} tabIndex={0}>
          Right end
        </TooltipTrigger>
      </SimpleTooltip>

      <SimpleTooltip label="Bottom end" side="bottom" align="end">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '4', gridRow: '5' }}>
          Bottom end
        </TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip label="Bottom center" side="bottom" align="center">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '3', gridRow: '5' }}>
          Bottom center
        </TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip label="Bottom start" side="bottom" align="start">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '2', gridRow: '5' }}>
          Bottom start
        </TooltipTrigger>
      </SimpleTooltip>

      <SimpleTooltip label="Left end" side="left" align="end">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '1', gridRow: '4' }}>
          Left end
        </TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip label="Left center" side="left" align="center">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '1', gridRow: '3' }}>
          Left center
        </TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip label="Left start" side="left" align="start">
        <TooltipTrigger as={PositionButton} style={{ gridColumn: '1', gridRow: '2' }}>
          Left start
        </TooltipTrigger>
      </SimpleTooltip>
    </div>
  </div>
);

export const AriaLabel = () => (
  <>
    <p>The first button will display AND enunciate the label.</p>
    <p>The second button will display the label, but enunciate the aria label.</p>
    <div style={{ display: 'flex' }}>
      <SimpleTooltip label="Notifications">
        <TooltipTrigger style={{ margin: 5 }}>
          <span aria-hidden>🔔(3)</span>
        </TooltipTrigger>
      </SimpleTooltip>

      <SimpleTooltip label="Notifications" aria-label="3 notifications">
        <TooltipTrigger style={{ margin: 5 }}>
          <span aria-hidden>🔔(3)</span>
        </TooltipTrigger>
      </SimpleTooltip>
    </div>
  </>
);

export const WithText = () => (
  <p>
    Hello this is a test with{' '}
    <SimpleTooltip label="This is a tooltip">
      <TooltipTrigger as="a" href="https://modulz.app">
        Tooltip
      </TooltipTrigger>
    </SimpleTooltip>{' '}
    inside a Text Component{' '}
    <SimpleTooltip label="This is a tooltip" side="top">
      <TooltipTrigger as="a" href="https://modulz.app">
        Tooltip
      </TooltipTrigger>
    </SimpleTooltip>{' '}
    some more text{' '}
    <SimpleTooltip label="This is a tooltip" side="right" align="center">
      <TooltipTrigger as="a" href="https://modulz.app">
        Tooltip
      </TooltipTrigger>
    </SimpleTooltip>{' '}
  </p>
);

export const WithExternalRef = () => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.boxShadow = '0 0 0 2px red';
    }
  });

  return (
    <SimpleTooltip label="Save document" side="bottom" align="end">
      <TooltipTrigger ref={buttonRef} type="button" style={{ margin: 100 }}>
        Save
      </TooltipTrigger>
    </SimpleTooltip>
  );
};

export const Unmount = () => {
  const [isMounted, setIsMounted] = React.useState(true);
  return (
    <>
      <ul>
        <li>Focus the first button (tooltip 1 shows)</li>
        <li>Focus the second button (tooltip 2 shows)</li>
        <li>Press escape (second button unmounts)</li>
        <li>Focus the first button (tooltip 1 should still show)</li>
      </ul>
      <SimpleTooltip label="tooltip 1">
        <TooltipTrigger style={{ alignSelf: 'flex-start', margin: '0vmin' }}>Tool 1</TooltipTrigger>
      </SimpleTooltip>

      {isMounted && (
        <SimpleTooltip label="tooltip 2">
          <TooltipTrigger
            style={{ alignSelf: 'flex-start', margin: '0vmin' }}
            onKeyDown={(event) => event.key === 'Escape' && setIsMounted(false)}
          >
            Tool 2
          </TooltipTrigger>
        </SimpleTooltip>
      )}
    </>
  );
};

export const Animated = () => {
  return (
    <div style={{ padding: 100 }}>
      <SimpleTooltip as={AnimatedPopper} label="Hello world 1">
        <TooltipTrigger style={{ marginRight: 10 }}>Hello 1</TooltipTrigger>
      </SimpleTooltip>
      <SimpleTooltip as={AnimatedPopper} label="Hello world 2" side="top">
        <TooltipTrigger>Hello 2</TooltipTrigger>
      </SimpleTooltip>
    </div>
  );
};

function SimpleTooltip({
  children,
  label,
  'aria-label': ariaLabel,
  isOpen,
  onOpenChange,
  ...props
}: any) {
  return (
    <Tooltip isOpen={isOpen} onIsOpenChange={onOpenChange}>
      {children}
      <TooltipPopper as={StyledPopper} sideOffset={5} {...props}>
        <TooltipContent as={StyledContent} aria-label={ariaLabel}>
          {label}
        </TooltipContent>
        <TooltipArrow as={StyledArrow} offset={10} />
      </TooltipPopper>
    </Tooltip>
  );
}

const PositionButton = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithRef<'button'>>(
  (props, forwardedRef) => (
    <button
      {...props}
      ref={forwardedRef}
      style={{ ...props.style, margin: 5, border: '1px solid black', background: 'transparent' }}
    />
  )
);

const StyledTrigger = styled('button', {});

const RECOMMENDED_CSS__TOOLTIP__POPPER = {
  transformOrigin: 'var(--interop-ui-tooltip-popper-transform-origin)',
};

const StyledPopper = styled('div', RECOMMENDED_CSS__TOOLTIP__POPPER);

const RECOMMENDED_CSS__TOOLTIP__CONTENT: any = {
  // ensures content isn't selectable and cannot receive events
  // this is just a detterent to people putting interactive content inside a `Tooltip`
  userSelect: 'none',
  pointerEvents: 'none',
};

const StyledContent = styled('div', {
  ...RECOMMENDED_CSS__TOOLTIP__CONTENT,
  backgroundColor: '$black',
  color: '$white',
  borderRadius: 5,
  padding: 10,
  maxWidth: 300,
});

const StyledArrow = styled(Arrow, {
  fill: '$black',
});

const scaleIn = css.keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const fadeIn = css.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const AnimatedPopper = styled(StyledPopper, {
  '&[data-state="delayed-open"]': {
    animation: `${scaleIn} 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="instant-open"]': {
    animation: `${fadeIn} 0.2s ease-out`,
  },
});
