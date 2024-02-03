import Date from "../components/Date";



export default {
  title: 'Date',
  component: Date,
};
// modes  sample tag-1 tag-2 valid-1 valid-2 invalid-1 invalid-2
const Template = (args) => <Date {...args} />;

export const sampleDate = Template.bind({});
sampleDate.args = {
   
    placeholder:'Enter text',
    value:'',
    mode:'sample',
    
};



