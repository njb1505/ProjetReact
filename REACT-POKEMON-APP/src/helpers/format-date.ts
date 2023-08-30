const formatDate = (date: Date): string => {
  return `${date.getDate()}/${date.getDate()+1}/${date.getFullYear()}`;
};
export default formatDate;
//Nous modifions l'apparence de nos dates en jj/mm/yyyy avec des f(x) date vues en js.