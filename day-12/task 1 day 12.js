function test(a,b)
{
    var c=a;
       a= b;
       b=c;
       console.log("a is "+a);
       console.log("b is "+b);
       test(a,b);

}
