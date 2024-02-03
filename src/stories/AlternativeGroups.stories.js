import AlternativeGroups from "../components/AlternativeGroups";



export default {
  title: 'AlternativeGroups',
  component: AlternativeGroups,
};
// modes  sample tag-1 tag-2 valid-1 valid-2 invalid-1 invalid-2
const Template = (args) => <AlternativeGroups {...args} />;

export const sample = Template.bind({});
sample.args = {
   
    placeholder:'Enter text',
    value:'',
    mode:'sample',
    
};
export const tag1 = Template.bind({});
tag1.args = {
    placeholder:'Addon',
    value:'',
    mode:'tag-1',
};
export const tag2 = Template.bind({});
tag2.args = {
    placeholder:'Addon',
    value:'',
    mode:'tag-2',
};
export const valid1 = Template.bind({});
valid1.args = {
    placeholder:'Enter text',
    value:'',
    mode:'valid-1',
};
export const valid2 = Template.bind({});
valid2.args = {
    placeholder:'Enter text',
    value:'',
    mode:'valid-2',
};
export const invalid1 = Template.bind({});
invalid1.args = {
    placeholder:'Enter text',
    value:'',
    mode:'invalid-1',
};
export const invalid2 = Template.bind({});
invalid2.args = {
    placeholder:'Enter text',
    value:'',
    mode:'invalid-2',
};


