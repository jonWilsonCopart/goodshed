import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// File Imports
import instance from "../../axios/instance";

import styles from './fileUpload.module.css'

class FileUpload extends Component {
  constructor(props){
    super(props);
    this.state= {
      fileSelected: null,
      loaded: 0,
      showFormFields: false,
      clientName: "",
      clientReview: "",
      review: "",
      textAreaFilled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedFile = this.handleSelectedFile.bind(this);
    this.selectPhotoInput = this.selectPhotoInput.bind(this);
    this.addClientReview = this.addClientReview.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleSubmit(event){
    const data = {
        name: this.state.clientName,
        review: this.state.review
    };
    event.preventDefault();
    instance.get("/reviews/all", data)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }

  handleSelectedFile(event){
    if(event){
      this.setState({ fileSelected: event.target.value}, () => console.log(this.state.fileSelected))
    }
  }

  selectPhotoInput(){

    return (
      <div className={styles['upload-btn-wrapper']}>
        <h3 className={styles.btn}>Select Photo</h3>
        <input type={'file'} name={"cPhoto"} id={""} onChange={this.handleSelectedFile} />
      </div>
    )
  }


  addClientReview(){
    return (
      <div className={styles['upload-btn-wrapper']} onClick={() => {this.setState({ showFormFields: true })}}>
        <p className={styles.btn} onClick={() => {this.setState({ showFormFields: true }, () => console.log(this.state.showForm))}}>Add Client Review</p>
      </div>
    )
  }



  showForm(){
    const { showFormFields, textAreaFilled } = this.state
    if( showFormFields ){
      return (
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: '500px', position: "relative"}}>
          <form style={{position: "relative", marginTop: 5, display: "flex", flexDirection: "column", justifyContent: "center"}} onSubmit={this.handleSubmit}>
            <div style={{justifyContent: "center", alignItems: "center", display: "flex", position: "relative"}}>
              <input type="text" name={'name'} required
                     value={ this.state.clientName }
                     onChange={ (name) => this.setState({ clientName: name.target.value }) }
                     />

                <label className={"nameLabel"} htmlFor="name">Name</label>
            </div>
            <div style={{justifyContent: "center", alignItems: "center", display: "flex", position: "relative", marginTop: 50}}>
              <textarea required className={styles.review} name={'review'} onChange={ (review) => this.setState({ review: review.target.value, textAreaFilled: review.target.value.length > 0 ? true : false })}></textarea>
              <label className={textAreaFilled ? "valid" : "invalid"} htmlFor="review">Add Kind Words</label>
            </div>
            <input className={styles.submitBtn} type={"submit"} value={"Submit"} />
          </form>

          {/*<form onSubmit={ this.handleSubmit } className={styles.formStyle}>*/}
            {/*<input*/}
              {/*type="text"*/}
              {/*placeholder="Client Name"*/}
              {/*className={styles.clientNameInput}*/}
              {/*value={ this.state.clientName }*/}
              {/*onChange={ (name) => this.setState({ clientName: name.target.value }) } />*/}
            {/*<input*/}
              {/*type="text"*/}
              {/*placeholder="Say something…"*/}
              {/*className={styles.clientReviewInput}*/}
              {/*value={ this.state.clientReview }*/}
              {/*onChange={ (review) => { this.setState({ clientReview: review.target.value })}} />*/}
            {/*<input type="submit"*/}
              {/*value="Post" />*/}
          {/*</form>*/}
        </div>
      )
    }
  }


  render() {
    return (
      <div className={ `${styles.outerContainer}`}>
        <div className={`${styles.container}`}>
          {this.addClientReview()}
        </div>
        <div style={{marginTop: 20}}>
          {this.showForm()}
        </div>
      </div>
    );
  }
}

export default FileUpload;
