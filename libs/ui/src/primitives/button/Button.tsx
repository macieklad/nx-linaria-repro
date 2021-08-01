import { forwardRef, useRef, ElementType, RefObject } from "react";
import { useButton } from "@react-aria/button";
import type * as Polymorphic from "@radix-ui/react-polymorphic";
import { AriaButtonProps } from "@react-types/button";

type PolymorphicButton = Polymorphic.ForwardRefComponent<
  "button",
  // TODO: type any based on 'as' prop if possible
  AriaButtonProps<ElementType<"button">>
>;

export const Button: PolymorphicButton = forwardRef(
  (
    { as: Comp = "button", children, className, style, ...props },
    forwardedRef
  ) => {
    const fallbackRef = useRef();
    const domRef = forwardedRef || fallbackRef;
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        elementType: Comp,
      },
      domRef as RefObject<HTMLButtonElement>
    );

    return (
      <Comp
        {...buttonProps}
        className={className}
        style={style}
        ref={domRef}
        data-pressed={isPressed}
      >
        {children}
      </Comp>
    );
  }
);
