
 <script>


  
import { onMount } from "svelte";
   import {inView , animate } from "motion"
 

 
   onMount(() => {
 
 //list
 animate('.leap', { opacity:[1] }   ,  {duration:1} )
 
 
 
 inView(".lup", (info) => {
   animate(info.target, { opacity:[1],x:[0,40]  } ,  {duration:1.5}  )}) 
 
 
 
   inView(".card1", (info) => {
   animate(info.target, { opacity:[1],y:[0,-40]  } ,  {duration:1}  )}) 

 
   inView(".card2", (info) => {
   animate(info.target, { opacity:[1],y:[0,-40]  } ,  {duration:2}  )}) 

  
   
   inView(".card3", (info) => {
   animate(info.target, { opacity:[1],y:[0,-40]  } ,  {duration:2}  )}) 


   
 inView(".beem", (info) => {
   animate(info.target, { opacity:[1],y:[0,-80]  } ,  {duration:1}  )}) 
 
 
     
 inView(".yeet", (info) => {
   animate(info.target, { opacity:[1]  } ,  {duration:2}  )}) 
 
 
 
 })




 </script>


<!--section1-->



 
<img class=' leap  opacity-0  h-64  md:mx-auto   mx-auto' src="shine .jpg" alt="">







<div class="md:flex md:flex-row flex flex-col-reverse  space-x-8  ">

  <div class="md:text-7xl w-80 lup text-4xl md:w-1/2 md:mx-32 mr-32 opacity-0 md:mt-12 mt-80 md:font-bold font-bold font-mono  md:text-gray-600 text-gray-600 ">Give us the time we will make it shine!</div>

  <div class="md:w-1/2   w-full  ">


  <img class="md:h-80 md:w-80 mx-16 absolute  beem  h-48 w-48 md:mx-12 md:absolute md:mt-10 mt-24 opacity-0 object-cover shadow-xl shadow-gray-300 rounded-full " src="hand.png" alt="">    
</div>
</div>

     


<div class="relative md:w-full md:mx-32 w-12 mx-auto  md:max-w-lg ">
<div class="absolute top-0  w-20 h-20 bg-blue-600 rounded-full mix-blend-multiply filter  blur-lg opacity-30 animate-blob animation-delay-2000 "></div>
    <div class="absolute -top-0 -right-4 w-12 h-12 bg-blue-700 rounded-full mix-blend-multiply filter blur-lg  opacity-70 animate-blob "></div>
    <div class="absolute bottom-8 -left-20 w-12 h-12 bg-blue-700 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-4000"></div>
    <div class="absolute bottom-8 right-20 w-16 h-16 bg-blue-500 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-7000"></div>
        
  
  
  </div>
      


     
     
     
     
     
     
     
     
     
     
     
     
        <!--section2-->  




        <div class="text-center mt-80 md:text-4xl yeet opacity-0 text-3xl text-gray-500">what we do?</div>


 

<div class="flex md:mt-32 mt-32 md:flex-row flex-col-reverse beem opacity-0 "> 

<div class="md:w-1/2 md:text-lg md:mx-12  w-80 p-6  text-2xl mt-12 m-12 mx-auto text-gray-500 md:p-4  shadow-lg rounded-lg md:h-64 ">A locally owned window cleaning business servicing Lynchburg, VA and surrounding areas. We specialize in residential and commercial window cleaning services. We can also provide cleaning to gutters and solar panels. Serving the community and others is a core value of ours. A portion of our proceeds are earmarked to help an orphanage in Cameroon Africa to provide financial support and help the kids with resources to to attend school and obtain an education. I also donate some of my services to support local churches. I invite you to partner with me to love on and support our community of great people.</div>
 
<div  class='md:w-1/2  p-4'><img class="h-80 object-cover mx-auto md:mx-32" src="bb.png" alt=""></div>
</div>








<!--section3-->  


<div class="text-center mt-32 md:text-2xl font-bold yeet opacity-0 text-2xl text-gray-500">Our primarily focus</div>






<!--cards-->

<!-- component -->
<div class="flex flex-col space-y-12 p-10 md:flex-row justify-items-center md:mt-16 mt-32  space-x-6">  
 
          
  <div class="bg-white rounded-2xl shadow-xl  px-8 py-12 sm:px-12 lg:px-8 card1  opacity-0">
              <div class="mb-12 space-y-4">
                  <h3 class="text-xl text-center font-semibold md:mt-12 text-gray-500">Window Cleaning</h3>
                
              </div>
              <img src="cll.jpg" class="  rounded-lg md:mt-12" alt="illustration" loading="lazy" width="900" height="600">
          </div>
         
         
         
         
         
         
         
         
         
         
         
         
         
          <div class="bg-white rounded-2xl shadow-xl  px-8 py-12 sm:px-12 lg:px-8 card2 opacity-0">
              <div class="mb-12 space-y-4">
                  <h3 class="text-xl text-center font-semibold text-gray-500">Gutter Clearing</h3>
                  
              </div>
              <img src="cll2.jpg" class="rounded-lg " alt="illustration" loading="lazy" width="900" height="600">
          </div>
         
         
         
         
         
         
         
         
          <div class="bg-white rounded-2xl shadow-xl  px-8 py-12 sm:px-12 card3 opactiy-0 lg:px-8">
              <div class="mb-12 space-y-4">
                  <h3 class="text-xl font-semibold text-center text-gray-500">Solar Panel Cleaning</h3>
                
              </div>
              <img src="cll3.jpg " class="rounded-lg" alt="illustration" loading="lazy" width="900" height="600">
          </div>
      </div>
  




<!--section4-->









<div class="text-center mt-32 text-4xl yeet opacity-0 text-gray-500">about me</div>




<img class='mx-auto h-64 w-64 md:w-40 md:h-40 rounded-full beem opacity-0 object-cover mt-32' src="seth.jpg" alt="">



<div class=" flex relative items-center w-full mx-auto  justify-center px-16">
  <div class="relative md:w-full  mt-12 max-w-lg">
    <div class="absolute top-0 md:-left-4 left-10 Md:w-20 md:h-20  h-12 w-12 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0  md:w-20 md:h-20 h-8 w-6 bg-blue-800 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob animation-delay-2000"></div>
    <div class="absolute top-80 -left-10 md:w-20 md:h-20 h-6 w-6 bg-blue-300 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob"></div>
    <div class="absolute top-60  md:w-20 md:h-20 h-8 w-8 bg-blue-800 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob animation-delay-2000"></div>
   

      
      <div class='text-xl  md:text-lg w-80 md:w-full mx-auto  font-slim relative beem opacity-0 md:mt-2  font-sans p-12 text-gray-500 bg-white  shadow-lg rounded-lg'>My name is Seth Schilinski, I grew up in Cameroon Africa since I was one years old, doing Missions work.<br> Once I graduated high school, I returned to the United States to study in Liberty University with my degree being Youth Ministry and Sports Outreach. I’ve always had a desire for missions and sports. In my business I do my best to Glorify God</div>
    
    </div>
  </div>






<!--section4-->


<div class="text-center font-bold yeet opacity-0  text-2xl mt-20 md:text-4xl text-gray-500">my mission</div>

 


<div class='flex md:flex-row flex-col-reverse md:w-full card1 opacity-0  w-80 mx-auto md:mt-32 mt-32 space-x-10  p-6 rounded-lg shadow-lg'>
 
<div class='text-2xl mt-6 text-gray-500 px-12'>  10% of my business income is sent to help support an orphanage in Cameroon Africa. This will help the children to go to classes and to have food on their plates.
</div>

<div><img class='rounded-lg ' src="han.gif" alt=""></div>


</div>




<!--section5-->


<div class="text-center mt-20 font-bold yeet opacity-0  text-2xl text-gray-500">more info</div>


<!-- component -->







<div class="h-screen flex flex-col mt-32 mx-auto yeet opacity-0  gap-4 items-center justify-center bg-white">

  <!-- Card 1 -->
  <div class="md:w-[30rem] w-[20rem]  border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">

    

    <div class="grid grid-cols-6 p-6 gap-y-2">

      <!-- Profile Picture -->
      

      <!-- Description -->
      <div class="col-span-5 md:col-span-4 ml-4 ">

        <p class="text-sky-500 font-bold text-xs">contact </p>

        <p class="text-gray-600 md:text-xl  text-sm font-bold">Email: SSW@superiorshinywindows.com </p>

        <p class="text-gray-400 text-lg"> - Number : 434-435-8716 </p>

       
      </div>

    </div> </div>

  <!-- Card 2 -->
  <div class="md:w-[30rem] w-[20rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50">

    <div class="grid grid-cols-6 p-5 gap-y-2">

      <!-- Profile Picture -->
    

      <!-- Description -->
      <div class="col-span-5 md:col-span-4 ml-4">

        <p class="text-sky-500 font-bold text-xs"> 7+ SPOTS LEFT </p>

        <p class="text-gray-600 font-bold"> -location: Lynchburg Virginia
          
           </p>

        <p class="text-gray-400">-Address: 3600 Old Forest Rd. Lynchburg VA, 24501 </p>

        

      </div>

    
    </div>
   
   <div class='p-4 '>

        <iframe  class='mx-auto rounded-lg w-[18rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.2058188170913!2d-79.21908468609941!3d37.40860984091709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b2d74f2d561741%3A0x9ae38d8584b4e9df!2s3600%20Old%20Forest%20Rd%2C%20Lynchburg%2C%20VA%2024501%2C%20USA!5e0!3m2!1sen!2szm!4v1674931045707!5m2!1sen!2szm"  width="450" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

   </div>
  
  
  </div>

</div>









<div class=" flex relative items-center w-full mx-auto  justify-center md:hidden  px-16">
  <div class="relative md:w-full  mt-12 max-w-lg">
    <div class="absolute top-0 md:-left-4 left-10 Md:w-20 md:h-20  h-12 w-12 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0  md:w-20 md:h-20 h-8 w-6 bg-blue-800 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob animation-delay-2000"></div>
    <div class="absolute top-80 -left-10 md:w-20 md:h-20 h-6 w-6 bg-blue-300 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob"></div>
    <div class="absolute top-60  md:w-20 md:h-20 h-8 w-8 bg-blue-800 rounded-full mix-blend-multiply filter blur-lg opacity-80 animate-blob animation-delay-2000"></div>
   

      
    
    </div>
  </div>

<div class='h-64 '></div>

<!-- This is an example component -->
<div class=" mt-34 p-4  yeet opacity-0 bg-gray-900">
    <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center">
            <h3 class="text-3xl mb-3"> hope to do business with you. </h3>
            <p>  All day, every day. </p>
           
            </div>
        </div>
        <div class=" flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p class="order-2 md:order-1 mt-8 md:mt-0"> &copy; Superior Shine Windows (LLC)
              , 2023. </p>
          
        </div>
    </div>
