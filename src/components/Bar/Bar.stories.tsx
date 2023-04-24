import type { Meta, StoryObj } from '@storybook/react';
import Bar from './Bar';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Graphs/Bar',
  component: Bar,
} satisfies Meta<typeof Bar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Three: Story = {
  args: {
    data: [
      { label: 'A', value: 5 },
      { label: 'B', value: 7 },
      { label: 'C', value: 3 },
    ],
  },
};

export const Five: Story = {
  args: {
    data: [
      { label: 'A', value: 5 },
      { label: 'B', value: 7 },
      { label: 'C', value: 3 },
      { label: 'D', value: 3 },
      { label: 'E', value: 100 },
    ],
  },
};

export const Nineteen: Story = {
  args: {
    data: [
      { label: 'A', value: 5 },
      { label: 'B', value: 7 },
      { label: 'C', value: 3 },
      { label: 'D', value: 3 },
      { label: 'E', value: 100 },
      { label: 'F', value: 20 },
      { label: 'G', value: 10 },
      { label: 'H', value: 8 },
      { label: 'I', value: 5 },
      { label: 'J', value: 30 },
      { label: 'K', value: 15 },
      { label: 'L', value: 12 },
      { label: 'M', value: 18 },
      { label: 'N', value: 22 },
      { label: 'O', value: 25 },
      { label: 'P', value: 35 },
      { label: 'Q', value: 50 },
      { label: 'R', value: 75 },
      { label: 'S', value: 90 },
    ],
  },
};
