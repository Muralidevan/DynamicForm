import React, { Component } from 'react'
import './style.css'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { values: [],radioValues:[],
            text:'',
            title:'',description:'',
   options:['short_answer','radio','checkbox'],
selectedOption:'short_answer' };
      }
    
      
         
      
    
      handleChange=( i,event)=> {
        //  console.log(i)
         let values = [...this.state.values];
         values[i] = event.target.value;
        // console.log(values)
         this.setState({ values });
      }
      handleRadioChange=( i,event)=> {
        //  console.log(i)
         let radioValues = [...this.state.radioValues];
         radioValues[i] = event.target.value;
        // console.log(radioValues)
         this.setState({ radioValues });
      }
      handleOptions =(e)=>{
        
          this.setState({
            selectedOption:e.target.value
          })

      }
      
      handleAdd=()=>{
       if(this.state.values.length<5) 
        {
            this.setState(prevState => ({ values: [...prevState.values, '']}))

          }
      }
      handleAddRadio=()=>{
        if(this.state.radioValues.length<5) 
         {
             this.setState(prevState => ({ radioValues: [...prevState.radioValues, '']}))
 
           }
       }
      
   

      handleText = (e)=>{
          this.setState({
              [e.target.name]:e.target.value
          })
      }
    
      handleSubmit=(event)=> {
       // alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
      }
    
      render() {
        return (
            <div>
                <div className="card">
                <form onSubmit={this.handleSubmit} className="form">

                 <input type="text" value={this.state.title} name="text" placeholder="Form Title" onChange={this.handleText}/>
          <br/>
                 <input type="text" value={this.state.description} name="text" placeholder="Form Description" onChange={this.handleText}/>
</form>
</div>
         <div  className="card">   
         
          <form onSubmit={this.handleSubmit} className="form">
              {/* {console.log(this.state.values.length)} */}
              <h3>Question</h3>
              <select onChange={this.handleOptions} value={this.state.selectedOption}>
              {this.state.options.map((ele)=>{
                  return <option key={ele} value={ele}>{ele}</option>
              })}
             
             
              </select>
              <br/>
         <hr/>
         <br/>
        
        
         {this.state.selectedOption==='short_answer'?( <input type="text" value={this.state.text} name="text" placeholder="short answer text" onChange={this.handleText} style={{	borderBottom: '2px dotted #a9a9a9'}}/>):''}
             
            
            {   this.state.selectedOption==='checkbox' && 
            <React.Fragment><input type="checkbox" value={this.state.values} onChange={(e)=>{this.handleChange(e)}} />

            <label>Option 1 <span style={{color: 'blue',
textDecoration: 'underline'}} onClick={()=>this.handleAdd()}>Add Option </span></label>
{
     this.state.values.slice(0,4).map((el, i) => 
     <div key={i}>
        <input type="checkbox" value={el||''} onChange={(e)=>{this.handleChange(i,e)}} />
      <label>Option {i+2} <span style={{color: 'blue',
textDecoration: 'underline'}} onClick={()=>this.handleAdd()}>Add Option  </span></label>

     </div>          
 )  
}</React.Fragment>
             }
              
              


{   this.state.selectedOption==='radio' && 
<React.Fragment>
<input type="radio" value={this.state.radioValues} onChange={(e)=>{this.handleRadioChange(e)}} />
<label>Option 1 <span style={{color: 'blue',
  textDecoration: 'underline'}} onClick={()=>this.handleAddRadio()}>Add Option </span></label>

              { this.state.radioValues.slice(0,4).map((el, i) => 
             <div key={i}>
                <input type="radio" value={el||''} onChange={(e)=>{this.handleRadioChange(i,e)}} />
              <label>Option {i+2} <span style={{color: 'blue',
  textDecoration: 'underline'}} onClick={()=>this.handleAddRadio()}>Add Option  </span></label>

             </div>          
         )  }
</React.Fragment>
      }


          </form>
          </div>
          </div>
        )
      }
    }
    

