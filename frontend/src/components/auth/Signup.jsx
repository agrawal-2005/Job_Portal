import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phonenumber: "",
        password: "",
        role: "",
        file: ""
    });

    const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
    }

    const changeFileHandler = (e) => {
        setInput({...input, file: e.target.file?.[0]});
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        
    }
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Prashant" name="fullname" value={input.fullname} onChange={changeEventHandler}/>
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="agrawal@gmail.com" name="email" value={input.email} onChange={changeEventHandler}/>
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="number" placeholder="xxxxxxxxxx" name="phonenumber" value={input.phonenumber} onChange={changeEventHandler}/>
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="" name="password" value={input.password} onChange={changeEventHandler}/>
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
                <label>Profile</label>
                <Input 
                    accept="image/*"
                    type="file"
                    className="cursor-pointer"
                    onChange={changeFileHandler}
                />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 items-center">Signup</Button>
          <span className="text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></span>
        </form>
      </div>
    </>
  );
}

export default Signup;
