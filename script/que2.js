// let key="e4c70ce6a6821649a416cb9521d5f4f8";
let key="099cd8cc49e43edc28b3d45fb030cac1"

let iFrame=document.getElementById("gmap_canvas")

let container=document.getElementById("container")

   async function getWeatherData(){
     try{

        let city=document.getElementById("city").value;
    let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)

    let data= await res.json();
    showWeather(data)
     } catch(err){
        console.log("err",err)
      }
   }

   async function getWeatherData1() {
  try {
    let city = document.getElementById('city').value ///accepting data
   
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}`,
    )

    let d = await res.json()
    showWeatherDays(d) 
  } catch (err) {
    console.log(err)
  }
}

   function showWeather(data){
      console.log("data",data)
   container.innerHTML=""
       console.log("data:",data)

       const timestamp1 =(data.sys.sunrise*1000) 
        const date1 = new Date(timestamp1);
        const result1 = String(date1)
        const x1= result1.split(" ");


       const timestamp =(data.sys.sunset*1000) 
        const date = new Date(timestamp);
        const result = String(date)
        const x= result.split(" ");
       

    let left=document.createElement("div")
    left.setAttribute("id","details")

    let name=document.createElement("h2")
    name.innerText=data.name

    let div1=document.createElement("div")
    div1.setAttribute("id","small")
    let temp_max=document.createElement("h2")
    temp_max.innerText=`Max-Temp:${data.main.temp_max}°C`;
    let logo1=document.createElement("img")
    logo1.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPAlFmN7UcU0fCzDysf8wHzrNSp9cr3QsmA&usqp=CAU`
    div1.append(temp_max,logo1)

    let div2=document.createElement("div")
    div2.setAttribute("id","small")
    let temp_min=document.createElement("h2")
    temp_min.innerText=`Min-Temp:${data.main.temp_min}°C`;
    let logo2=document.createElement("img")
    logo2.src=`https://cdn.iconscout.com/icon/premium/png-256-thumb/low-temperature-1895134-1605050.png`
    div2.append(temp_min,logo2)


    let div3=document.createElement("div")
    div3.setAttribute("id","small")
    let humidity=document.createElement("h2")
    humidity.innerText=`Humidity-${data.main.humidity}`
    let logo3=document.createElement("img")
    logo3.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWxYnwrCLhwPz7tItqyln0D0u4MMPVzZ2Ew&usqp=CAU`
    div3.append(humidity,logo3)


    
    let div4=document.createElement("div")
    div4.setAttribute("id","small")
    let pressure=document.createElement("h2")
    pressure.innerText=`Pressure-${data.main.pressure}`
    let logo4=document.createElement("img")
    logo4.src=`https://cdn4.vectorstock.com/i/1000x1000/01/43/pressure-icon-manometer-symbol-vector-26970143.jpg`
    div4.append(pressure,logo4)

    
    

    let div5=document.createElement("div")
    div5.setAttribute("id","small")
    let wind=document.createElement("h2")
    wind.innerText=`Wind-Speed-${data.wind.speed}mph`
    let logo5=document.createElement("img")
    logo5.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_apfpBVKSgWBfpB4zpCiIZBX8H6-zxKCbFQ&usqp=CAU`
    div5.append(wind,logo5)
  


    let div6=document.createElement("div")
    div6.setAttribute("id","small")
    let sunrise=document.createElement("h2")
    sunrise.innerText=`Sunrise-${x1[4]}`
    let logo6=document.createElement("img")
    logo6.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlBbT7x0pXGmy2_DxZSoNQzaJ1dd5L6Mlew&usqp=CAU`
    div6.append(sunrise,logo6)


    let div7=document.createElement("div")
    div7.setAttribute("id","small")
    let sunset=document.createElement("h2")
    sunset.innerText=`Sunset-${x[4]}`
    let logo7=document.createElement("img")
    logo7.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhVKivafklSOxyRH8pyFOa19B8HSbaS4PUg&usqp=CAU`
    div7.append(sunset,logo7)



    left.append(name,div2,div1,div6,div7,div5,div3,div4)

    let right=document.createElement("div")
    iFrame.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    right.append(iFrame)
    container.append(left,right)
   }

   
function showWeatherDays(d) {
  //d represent whole data
  document.getElementById("container1").textContent=""
  console.log(d.list)
  d.list.forEach(function (el, index) {
    
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
      if (el.weather[0].main == 'Clear') {
        var div=document.createElement("div")

        var day =document.createElement('h2')
        day.textContent = days[index]

        var logo=document.createElement("p")
        logo.innerHTML='<i class="fas fa-sun fa-4x"></i>'

        var minTemp=document.createElement("h3")
        minTemp.textContent="Min. Temp "+Math.round(el.main.temp_min-273)+"°C"

        var maxTemp=document.createElement("h3")
        maxTemp.textContent="Max. Temp "+Math.round(el.main.temp_max-273)+"°C"
      }
      else if (el.weather[0].main == 'Clouds') {
        var div=document.createElement("div")

        var day =document.createElement('h2')
        day.textContent = days[index]

        var logo=document.createElement("p")
        logo.innerHTML='<i class="fas fa-cloud-sun fa-4x"></i>'

        var minTemp=document.createElement("h3")
        minTemp.textContent="Min. Temp "+Math.round(el.main.temp_min-273)+"°C"

        var maxTemp=document.createElement("h3")
        maxTemp.textContent="Max. Temp "+Math.round(el.main.temp_max-273)+"°C"
      }
      else if (el.weather[0].main == 'Snow') {
        var div=document.createElement("div")

        var day =document.createElement('h2')
        day.textContent = days[index]

        var logo=document.createElement("p")
        logo.innerHTML='<i class="fas fa-cloud-showers-heavy fa-4x"></i>'

        var minTemp=document.createElement("h3")
        minTemp.textContent="Min. Temp "+Math.round(el.main.temp_min-273)+"°C"

        var maxTemp=document.createElement("h3")
        maxTemp.textContent="Max. Temp "+Math.round(el.main.temp_max-273)+"°C"
      }
    
      div.append(day,logo,minTemp,maxTemp)
      container1.append(div)
   
  })
}