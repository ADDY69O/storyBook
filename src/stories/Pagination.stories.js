
import Pagination from "../components/Pagination";



export default {
  title: 'Pagination',
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const simple = Template.bind({});
simple.args = {
    count: 6,
    mode: 'simple',
    backgroundColor: 'white',
    color :'blue',
    border:'#DEE2E6',
    currentPage:2
};

export const primary = Template.bind({});
primary.args={
    count: 6,
    mode: 'primary',
    backgroundColor: 'white',
    color :'blue',
    border:'#DEE2E6',
    currentPage:2
}
export const secondary = Template.bind({});
secondary.args={
    count: 6,
    mode: 'secondary',
    backgroundColor: 'white',
    color :'blue',
    border:'#DEE2E6',
    currentPage:2
}

