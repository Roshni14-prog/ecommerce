import React,{useEffect} from 'react';
import contact from './contact-us.jpg';

const Contact = () =>{
  useEffect(() =>{
    document.title="Contact";
},[]);
    return(
       
        <>
         <div className="contact" align="center">
                    <img src={contact} alt=".." />
            </div>

        <div className="text-center">
            <h1 className ="text-center bg-warning ">Contact Us</h1>

        </div>

        <div className ="container contact-div">
            <div className ="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form>
                    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="email" placeholder="Enter Your Name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone</label>
    <input type="email" placeholder="Phone" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" placeholder="Email Address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text"></div>
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Message</label>
    <textarea type="password" placeholder="Message" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                    </form>

                </div>
            </div>
        </div>
        </>
    );
}


export default Contact;