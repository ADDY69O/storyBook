
import Navbar from "../components/Navbar";

import { SiGooglemeet } from "react-icons/si";

export default {
  title: 'Navbar',
  component: Navbar,
};

const redleft = [{'label':"Logo",'type':'text'}]
const redRight= [{'label':"Home",'type':'text'},{'label':"Link",'type':'link'},{'label':"Dropdown",'type':'dropdown'}]
const blueleft = [{'label':"Logo",'type':'text'}]
const blueRight= [{'label':"SiGooglemeet","type":'icon'},{'label':"Message",'type':'text'},{'label':"Call",'type':'text'}]
const greyleft =[ {'label':"Logo",'type':'text'},{'label':"Home",'type':'text'},{'label':"Link",'type':'link'},{'label':"Dropdown","type":'dropdown'}]
const greyRight=[{'label':"disabled",'type':'button'},{'label':"search",'type':'input'}]


export const Red = () => <Navbar left={redleft} right={redRight} color="white"   backgroundColor="red"/>;
export const Blue = () => <Navbar left={blueleft} right={blueRight} backgroundColor="blue" color="white" />;
export const Grey = () => <Navbar left={greyleft} right={greyRight} backgroundColor="gray" color="black" />;
