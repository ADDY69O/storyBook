import { Button } from "../components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Primary',
  },
};

export const Success = {
  args:{
   
    success:true,
    label:'Success',
  }
}
export const SuccessLight = {
  args:{
    light:true,
    success:true,
    label:'Success-Light',
  }
}
export const Danger = {
  args:{
    
    danger:true,
    label:'Danger',
  }
}
export const DangerLight = {
  args:{
    light:true,
    danger:true,
    label:'Danger-Light',
  }
}
export const Warning = {
  args:{
   
    warning:true,
    label:'Warning',
  }
}
export const WarningLight = {
  args:{
   light:true,
    warning:true,
    label:'Warning-Light',
  }
}
export const Info = {
  args:{
   
    info:true,
    label:'Info',
  }
}
export const InfoLight = {
  args:{
    light:true,
    info:true,
    label:'Info-Light',
  }
}
export const Dark = {
  args:{
   
    dark:true,
    label:'Dark',
  }
}
export const DarkLight = {
  args:{
    light:true,
    dark:true,
    label:'Dark-Light',
  }
}


export const Secondary = {
  args: { 
    label: 'Secondary',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Button',
  },
};
