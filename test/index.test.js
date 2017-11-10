'use strict';

var expect = require( 'chai' ).expect;
var myLambda = require( '../index' );

describe( 'myLambda', function() {


       it( `successful invocation`, function( done ) {

        
           myLambda.handler( {/* event*/ }, { /* context */ }, (err, result) => {
           });
       });
});