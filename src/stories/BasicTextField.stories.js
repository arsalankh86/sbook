import BasicTextFields from './BasicTextFields';

export default {
  title: 'Example/TextField',
  component: BasicTextFields,
  tags: ['autodocs'],
  argTypes: {
    value:"new"
  },
};

export const Primary = {
  args: {
    value: 'primary',
  },
};

export const Secondary = {
  args: {
    value: 'sec',
  },
};
