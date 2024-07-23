const month= document.getElementById("month");
const day= document.getElementById("day");
const dateNum= document.getElementById("date");
const year= document.getElementById("year");

const date = new date();

const currentmonth = date.getMonth();
month.innerHTML = date.toLocalDateString("en",{
    month: "long",
})
const currentday = date.getDay();
day.innerHTML = date.toLocalDateString("en",{
    day: "numeric",
    })
    const currentdate = date.getDate();
    dateNum.innerHTML = date.toLocalDateString("en",{
    day: "numeric",
  })
        const currentyear = date.getFullYear();
        year.innerHTML = date.toLocalDateString("en",{
            year: "numeric",
      })
