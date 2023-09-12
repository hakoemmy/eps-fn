import { replace } from 'lodash';

const replaceAll = (text, oldString, newString) => {
   return replace(text,new RegExp(oldString,'g'), newString)
}

export default replaceAll;
