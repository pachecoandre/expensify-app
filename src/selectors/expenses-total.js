export default (expenses) => {
   return expenses
      .map((elem) => elem.amount)
      .reduce((sum, value) => sum + value, 0)
}