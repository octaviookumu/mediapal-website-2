<?php

namespace App\Http\Controllers;

use App\Mail\ContactUs;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    //

     public function storeContactForm (Request $request)
    {

    //     return response()->json(['request stored']);
    //   $request->validate([
    //     'firstname' => 'required',
    //     'lastname' =>'required',
    //     'companyname'=>'required',
    //     'message' => 'required',
    //     'email' => 'required',
    //     'phone'=>'required'
    //   ]);
       
    // dd($request);
      $contactList = new Contact;
      $contactList->first_name = $request->firstname;
      $contactList->last_name = $request->lastname;
      $contactList->company_name = $request->companyname;
      $contactList->message = $request->message;
      $contactList->email = $request->email;
      $contactList->phone = $request->phone;
      $contactList->save();


      $details = [
        'company_name' => 'Mail from: '.$request->companyname,
        'message' => $request->message,
        'from_email' => $request->email,
        'first_name' => $request->firstname
       ];
      
      Mail::to('mudiborogers@gmail.com')->send(new \App\Mail\ContactUs($details));
   
      return response()->json(['request stored']);
       
    }

}
