"use client";

import * as RadixSlider from "@radix-ui/react-slider";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  ariaLabel?: string;
}

const Slider: React.FC<SliderProps> = ({ 
  value = 1, 
  onChange,
  min = 0,
  max = 1,
  step = 0.1,
  ariaLabel = "Volume"
}) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <RadixSlider.Root
      className="
        relative 
        flex 
        items-center 
        select-none 
        touch-none 
        w-full 
        h-10
      "
      value={[value]}
      onValueChange={handleChange}
      min={min}
      max={max}
      step={step}
      aria-label={ariaLabel}
    >
      <RadixSlider.Track
        className="
          bg-neutral-600 
          relative 
          grow 
          rounded-full 
          h-[3px]
        "
      >
        <RadixSlider.Range
          className="
            absolute 
            bg-white 
            rounded-full 
            h-full
          "
        />
      </RadixSlider.Track>
      <RadixSlider.Thumb
        className="
          block
          w-3
          h-3
          bg-white
          rounded-full
          shadow-lg
          focus:outline-none
          focus:shadow-black
          hover:bg-neutral-200
          transition-colors
        "
      />
    </RadixSlider.Root>
  );
};

export default Slider;