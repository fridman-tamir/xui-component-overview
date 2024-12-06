//main entry file


import "../public/style.css"
import {
    Xpell as _x,
    _xlog, //Xpell logger,
    XUI, //Xpell UI module,
    XData as _xd, //Xpell real-time data cache module,
    _xem, //Xpell event manager,
} from "xpell"

import { XField } from "./Components/XField"


async function main() {
    _x.verbose = true // enable verbose mode (xlog)
    _x.info() // show xpell engine info
    _x.start() // start xpell engine (frame loop)
    _x.loadModule(XUI)
    XUI.createPlayer("xplayer")


    // XUI (Xpell UI module) is a module that provides a way to create and manage UI elements
    // With XUI you can create and manage HTML elements using JSON objects
    // XUIObject is a special type of Xpell Object that is used to create and manage HTML elements
    // XUIObject can be created using JSON objects with the following rules:
    // attributes that prefixed with an underscore (_) are processed for Xpell
    // attributes that are not prefixed with an underscore (_) are transferred to the DOM element
    // The type of the element is defined by the _type attribute, if the _type attribute is not defined, the element will be created as a div / view element
    // _id: the id of the element - if not defined, a random id will be generated (this tag is also transferred to the DOM element as id)
    // _type: the type of the element
    // _parent_element: the id of the parent element - required only for root view
    // _text: the text content of the element
    // _children: an array of child elements
    // _on_create: a function that is called when the element is created
    // _on_mount: a function that is called when the element is mounted
    // _on_frame: a function that is called every frame
    // _on_click: a function that is called when the element is clicked
    // _on: an object that contains event listeners for custom events and html events
    // XUI Core Elements:
    // view/div, label, link, button, text, password, input, textarea, video, image, list, form, webcam, xhtml, 
    // svg, circle, rect, ellipse, line, polyline, polygon, path
    // The xhtml element is used to create custom elements using HTML code, add the _html_tag attribute to define the tag name
    // Use XUI.add create and mount an element to the DOM



    //create main view 




    


   XUI.importObject(XField._xtype,XField)
  
  
    const mainView = {
        _type: "view",
        _id: "main-view",
        class: "main-view",
        _children: [
            {
                _type: "field",
                _label: "Name",
                _id: "name-field",
                _placeholder: "Enter your name",
                _value: "John Doe"
            },
            {
                _type: "field",
                _label: "Email",
                _id: "email-field",
                _placeholder: "Enter your email", 
                _value: "mymail@text.com"
            },
            {
                _type:"view",
                style:"display:flex;justify-content:center;gap:10px;margin-top:10px;",
                _children: [
                    {
                        _type: "button",
                        _text: "Reset",
                        _on_click: (xobj) => {
                            XUI._o["name-field"].reset()
                            XUI._o["email-field"].reset()
                        }
                    },
                    
                    {
                        _type: "button",
                        _text: "Submit",
                        _on_click: (xobj) => {
                            alert("Hello " + XUI._o["name-field"]._text + " your email is " + XUI._o["email-field"]._text)
                        }
                    }
                ]

            }
            
            
        ]
    }

    XUI.add(mainView)

    

}


main()



























// const mainView = {
//     _type: "view",
//     _id: "main-view",
//     _parent_element: "root",
//     class: "main-view",
//     _start_time: Date.now(),
//     _on_frame: (xobj,frameNum) => {
//         const time = Date.now() - xobj._start_time
//         if(time > 2000) {
//             //change background color hsl * frameNum
//             xobj.dom.style.backgroundColor = "hsl(" + frameNum + ", 100%, 50%)"
//         }
//     },
//     _children: [
//         {
//             _type: "view",
//             _text: "Xpell UI '_on_frame' Hack",
//             class: "title",
//             _start_time: Date.now(),
//             _on_frame: (xobj,frameNum) => { 
//                 const time = Date.now() - xobj._start_time
//                 //if time >1 second, hide the view
//                 const logo = XUI.getObject("logo")
//                 if(time > 1000 && !xobj._hidden) {
//                     xobj.hide()
//                     logo.show()
//                     xobj._hidden = true
//                 } 
//                 if (time > 2000) {
//                     logo._allow_spin = true
//                 }
//             }
//         },
//         {
//             _type: "image",
//             _id: "logo",
//             src: "/public/images/logo.webp",
//             class: "logo-image",
//             _allow_spin: false,
//             _on_mount: (xobj) => {
//                 xobj.hide()
//             },
//             _on_frame: (xobj,frameNum) => { 
//                 //spin the logo
//                 if(xobj._allow_spin) {
//                     xobj.dom.style.transform = `rotate(${frameNum}deg )`
//                 }
//             }
//         } 
//     ]
// }


// XUI.loadObject(mainView)