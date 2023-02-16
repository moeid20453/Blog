let joi = require('joi');


module.exports = {
    addUserValidation: {
        body: joi.object().required().keys({
            email: joi.string().email({minDomainSegments: 2, tlds: {allow:['com','hhh']}}).empty().required().messages({
                "string.email" : "please enter a valid email",
                "any.required" : "please enter an email",
                "string.empty" : "email cannot be empty"
            }),
            password : joi.string().empty().required().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)).messages({
                "string.base" : "please enter a valid password",
                "any.required" : "please enter a password",
                "string.empty" : "password cannot be empty",
                "string.pattern.base" : "please enter a valid password A-Z,a-z, 1-9,special characters"
            }),
             userName: joi.string().empty().required().alphanum().min(5).max(20).messages({
                "string.base" : "please enter a valid UserName",
                "string.empty" : "UserName cannot be empty",
                "any.required" : "please enter a UserName",
                "string.alphanum" : "please enter  Valid UserName",
                "string.min" : "please enter a UserName Between 5 and 20 Characters",
                "string.max" : "please enter a UserName Between 5 and 20 Characters"
             }),

             isActive : joi.boolean().optional().messages({
                "boolean.base" : "please enter a valid is active status",  
             })
        })
    }
}