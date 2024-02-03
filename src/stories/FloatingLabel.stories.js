import FloatingLabel from "../components/FloatingLabel";



export default {
  title: 'FloatingLabel',
  component: FloatingLabel,
};

const Template = (args) => <FloatingLabel {...args} />;

export const email = Template.bind({});
email.args = {
    label:'Email',
    placeholder:'Email address',
    value:'',
    disable:false,
    valid:false,
    type:'email',
    isCheck:false
};
export const password = Template.bind({});
password.args = {
    label:'Password',
    placeholder:'xxx',
    value:'',
    disable:false,
    valid:false,
    type:'password',
    isCheck:false
};
export const disable = Template.bind({});
disable.args = {
    label:'',
    placeholder:'',
    value:'Regular',
    disable:true,
    valid:false,
    type:'text',
    isCheck:false
};
export const valid = Template.bind({});
valid.args = {
    label:'',
    placeholder:'',
    value:'Regular',
    disable:false,
    valid:true,
    type:'text',
    isCheck:true
};
export const inValid = Template.bind({});
inValid.args = {
    label:'',
    placeholder:'',
    value:'Regular',
    disable:false,
    valid:false,
    type:'text',
    isCheck:true
};

