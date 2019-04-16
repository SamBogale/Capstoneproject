export default function Home(){
    return `
    <div id="content">
 <div class="row">
     <div class="column1">
    <div> </br>ABC office supply
         <li><a href="#">About us</a></li>
         <li> <a href="#">Careers</a></li> 
         <li> <a href="#">Store location </a></li>  
                     <h4>1234 XYZ street</br>
                     Saint louis, MO </h4> 
         <div class="map"><iframe src='https://maps.google.com/maps?q=4200%20duncan%20&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'></iframe></div>               

    </div>
     </div>
             
     <div class="column2"> 
          <div class="col"><div class="form-container">
          <h2>Login</h2>
          <form>
            <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" required></br>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required></br>
      
          <button type="submit" class="llbtn">Login</button><label>
              <input type="checkbox" checked="checked" name="remember"> Remember me
          </label><span class="psw">Forgot <a href="#">password?</a></span>
          <a href="#"> <h3>Sign up</h3></a> 
         
        </form>
      </div></div>
          <div>
          <div class="tech-slideshow">
      <div class="mover-1"></div>
      <div class="mover-2"></div>
    </div>
          </div>
            
      </div>
     <div class="column3">
          <div><input class="tex_area"  type="text" value="text" >
          <input class="btn_2"   type="button" value="Search" ></div>
         <div> </br>Orders & Returns
         <li><a href="#">Order Status</a></li>
         <li> <a href="#">Shipping, Delivery & Store Pickup</a></li>  
         <li> <a href="#">Return & Exchange Promise</a></li>                     
             </div>
             <div class="cal"><iframe src="https://calendar.google.com/calendar/embed?src=samenati%40gmail.com&ctz=America%2FChicago" style="border: 0" width="200" height="600" frameborder="0" scrolling="no"></iframe>
             </div>
             <div class="selles"> <h1 class="blinking">Big Discount from  April 10-20</h1> </div>
             
         </div>
 </div>
 <table>
  <tr>
    <th class="th" >Printer</th>
    <th class="th">Software</th> 
    <th class="th">Scanners</th>
    <th class="th">Accessories</th> 
  </tr>
  <tr>
    <td><li><a href="">Color printer</a></li></td>
    <td><li><a href="">Application software</a></td>
    <td><li><a href="">Flatbed Scanner. ...</a></td>
    <td><li><a href="">	Hubs & USB Gadgets.</a></td>
  </tr>
  <tr>
    <td><li><a href="">Black and white printer</a></td>
    <td><li><a href="">Operating system</a></td>
    <td><li><a href="">Sheetfed Scanner</a></td>
    <td><li><a href="">USB Flash Drives</a></td>
  </tr>
  <tr>
    <tr>
    <td><li><a href="">See printer ink</a></td>
    <td><li><a href="">Games</a></td>
    <td><li><a href="">Handheld Scanner</a></td>
    <td><li><a href="">Surge Protectors & UPS.</a></td>
  </tr>
 
</table>

</div>
  `;
}
