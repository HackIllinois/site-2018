import React, { Component } from 'react'

import styles from './faq.scss'

class FAQItem extends Component {
	
	constructor(props) {
		super(props);
		
		this.handleShowClick = this.handleShowClick.bind(this);
		this.handleHideClick = this.handleHideClick.bind(this);
		
		this.state = {expanded: false};
	}
	
	handleShowClick() {
		this.setState({expanded: true});
	}

	handleHideClick() {
		this.setState({expanded: false});
	}
	
	render() {
		const stGlobal = {
			width: '96%',
			margin: '0.3em 2%',
			display: 'inline-block',
		};
		
		const stHead = {
			padding: '16px 24px',
			background: '#11122F',
			color: 'white',
			border: 'none',
			fontSize: '140%',
			textAlign: 'left',
		}
		
		const stDrop = {
			padding: '16px 24px',
			fontSize: '120%',
			lineHeight: '110%',
			background: '#11122F66',
			color: 'white'
		};
		
		const stEx = { // the plus/minus signs
			float: 'right',
			display: 'inline-block',
			fontWeight: 'bold',
			lineHeight: '65%', // this has to be eyeballed
			fontSize: '150%',
		};
		
		const expanded = this.state.expanded;
		
		let button = null;
		let body = null;
		let expand = null;
		let listener = null;
		
		let ru = '6px ';
		let rn = '0px ';
		
		if (expanded) {
			stHead.borderRadius = ru + ru + rn + rn;
			stDrop.borderRadius = rn + rn + ru + ru;
			
			listener = this.handleHideClick;
			button = <span>{this.props.header}</span>;
			body = <div className="faq-body" style={stDrop}>{this.props.children}</div>;
			expand = <span style={stEx}>–</span>;
		} else {
			stHead.borderRadius = ru + ru + ru + ru;
			
			listener = this.handleShowClick;
			button = <span>{this.props.header}</span>;
			expand = <span style={stEx}>+</span>;
		}
		
		return (
			<div style={stGlobal}>
				<div onClick={listener} style={stHead}>
					{button}
					{expand}
				</div>
				{body}
				
			</div>
		);
	}
}

class FAQ extends Component {
	
	render() {
		
		const column = {
			width: '50%',
			display: 'inline-block',
		}
		
		let faqs = [
			{question: "When should I arrive?", answer: "You should arrive by 5 PM on Friday. We will release a schedule soon."},
			{question: "What should I bring?", answer: " You should bring a student ID, a change of clothing or two, toiletries, a laptop and charger, and any required hardware for your project. Essentially, bring anything you would need for a normal weekend. Due to power draw concerns, please do not bring extra monitors or desktop computers."},
			{question: "Do I need a team?", answer: "Absolutely not! Many attendees come without a team and find a group at the event. We will be providing mentor matching and a team formation workshop for you to meet other like-minded individuals."},
			{question: "Will there be food?", answer: "All meals, snacks, and drinks will be provided for the entire weekend. If you have a dietary restriction, please mention it on your application. There will be a wide variety of food."},
			{question: "Who do I contact for help?", answer: "Mentors from leading technology companies will be on-hand to provide support and troubleshoot problems in both the CREATE and CONTRIBUTE tracks. We also encourage all attendees to help each other!"},
			{question: "Where do I sleep?", answer: "Sleeping rooms will be furnished with air mattresses and pillows. We want you to be comfortable!"},
			{question: "Will you have hardware?", answer: "We'll have high-level hardware provided by companies. We'll also have basic hardware components like resistors, transistors, and ICs, as well as wood, building materials, and power tools for you to tinker with."},
			{question: "What are the prizes?", answer: ["You can see all potential prizes and prize criteria at ", <a href='https://hackillinois.org/prizes'>https://hackillinois.org/prizes</a>, "."]},
			{question: "What will contributors work on?", answer: ["If you RSVPed to the Contribute track, you will be working on one of the projects in the ecosystem in which you were accepted. See: ", <a href='https://hackillinois.org/projects'>https://hackillinois.org/projects</a>, '.']},
			{question: "Other questions?", answer: ["Please don't hesitate to reach out to us at ", <a href='mailto:contact@hackillinois.org'>contact@hackillinois.org</a>, "!"]},
        ];

		let listItems = faqs.map( (item) => {
			return (
				<FAQItem header={item.question}>
					{item.answer}
				</FAQItem>
			);
		});
		
		return(
			<div>
				{listItems}
			</div>
        );
    }
}

export default FAQ
