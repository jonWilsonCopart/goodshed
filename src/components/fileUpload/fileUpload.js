import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// File Imports

import styles from './fileUpload.module.css'

class FileUpload extends Component {
  constructor(props){
    super(props);
    this.state= {
      fileSelected: null,
      loaded: 0,
      showFormFields: false,
      clientName: "",
      clientReview: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectedFile = this.handleSelectedFile.bind(this);
    this.selectPhotoInput = this.selectPhotoInput.bind(this);
    this.addClientReview = this.addClientReview.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleSubmit(){

  }

  handleSelectedFile(event){
    if(event){
      this.setState({ fileSelected: event.target.value}, () => console.log(this.state.fileSelected))
    }
  }

  selectPhotoInput(){

    return (
      <div className={styles['upload-btn-wrapper']}>
        <h2 className={styles.btn}>Select Photo</h2>
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
    const { showFormFields } = this.state
    if( showFormFields ){
      return (
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', height: '500px'}}>
          <form>
            <div className="group">
              <input type="text" required
                     value={ this.state.clientName }
                     onChange={ (name) => this.setState({ clientName: name.target.value }) }
                     placeholder="Client Name"/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Name</label>
            </div>

            <div className="group">
              <input type="text" required />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
            </div>

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
          {this.selectPhotoInput()}
          {this.addClientReview()}
        </div>
        {this.showForm()}
      </div>
    );
  }
}

export default FileUpload;
