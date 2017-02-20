"use strict";
(function(){
    angular
    .module("codingChallenge")
    .controller("FormController", FormController);
    
    function FormController($scope){          
        //Schema part
        $scope.schema = {
            type: "object",
            properties: {
                table_name: { type: "string", minLength: 1, title: "Table Name", description: "Table Name used for the query"},
                //change type into string will display the date in yyyy-mm--dd format
                start_time:{type: "number", format: "date", title: "Start Time", description: "Start Time in UNIX Epoch format"},
                
                end_time:{type: "number", format: "date", title: "End Time", description: "End Time in UNIX Epoch format"},                
                
                select_fields: {
                  title: "Select Fields",
                  type: "array",                  
                  items: {
                    type: "string",
                    enum: ["time", "source_vn", "destination_vn", "source_port", "destination_port", "traffic"]
                  }
                },
//              *****start where clause*****
                where_clause: {
                    type: "array",                    
                    items: {
                        title:"Combination of OR",                        
                        type: "array",
                        items:{                            
                            title:"Combination of AND",
                            type:"object",
                            properties: {                                                                
                                name: {
                                    title: "Name",
                                    type: "string"
                                },
                                value: {
                                    title: "Value",
                                    type: "string",                                                                
                                },                            
                                operator: {
                                    title: "Choose euqal or not equal",
                                    type: "string",
                                    enum: ["=", "!="]
                                }                                    
                            }                                                                                    
                        }    
                    }
                }
//              *****end where clause*****
            }
        };
                
        $scope.form = [
//            "*",            
            "table_name",            
            "start_time",            
            "end_time",                          
            "select_fields",                        
            {
                key: "where_clause",
                add: "OR",
                style: {
                  add: "btn-success",                    
                },                 
            },            
            {
              type: "submit",
              title: "Submit"
            },            
        ];
        
        $scope.model = {};                        
        
        //Form part
        $scope.onSubmit = function(form) {
            // First we broadcast an event so all fields validate themselves
            $scope.$broadcast('schemaFormValidate');

            // Then we check if the form is valid
            if (form.$valid) {
              // ... do whatever you need to do with your data.
                $scope.jsonResult=function(){
                    var jsonRes = JSON.stringify($scope.model, null, 2);
                    return jsonRes;
                }
            }
        }                
    }        
})()
