// 5 random number and then prints min and max value
{
  let maxvalue = 0;
  let minvalue = 1000;
  for (i = 1; i <= 5; i++) {
    num = Math.floor(Math.random() * 999);
    console.log(num);
    if (maxvalue < num) maxvalue = num;
    if (minvalue > num) minvalue = num;
  }
  console.log("Maximum value :" + maxvalue);
  console.log("Minimum value :" + minvalue);
}
