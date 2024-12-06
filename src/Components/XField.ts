import { XUIObject } from "xpell";



/**
     * XField
     * A simple input field element
     * @param {Object} data - the data object
     * @param {String} data._label - the label of the field
     * @param {String} data._placeholder - the placeholder of the field
     * @param {String} data._value - the value of the field
     */
export class XField extends XUIObject {

    static _xtype = "field"


    _label = "Field"
    _placeholder: any
    _value: any


    constructor(data) {
        const defaults = {
            _type: XField._xtype,
            class: "xfield",
            _html_tag: "div",
        }
        super(data,defaults,true)
        this.parse(data)

        this.append({
            _type: "label",
            _text: this._label,
            _id: this._id + "-label",
            class: "xfield-label",
            _on_click: (xobj:XUIObject,data:any) => {
                console.log("label clicked" , data)
            }
        })

        this.append({
            _type: "input",
            _id: this._id + "-input",
            class: "xfield-input",
            placeholder: this._placeholder,
            value: this._value
        })

        this.addNanoCommand("reset",(xcmd,xobj) => {
            XUI._o[this._id + "-input"]._text = ""
        })

    }

    reset() {
        XUI._o[this._id + "-input"]._text = ""
    }   
}