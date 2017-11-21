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
			background: 'rgba(17, 18, 47, 0.42)',
			color: 'white',
			fontWeight: '200',
			fontSize: '1.3em'
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
			{question: "Are there travel reimbursements?", answer: "Unfortunately, we will not be able to provide travel reimbursements to student attendees. However, we will have busses going to 11 schools."},
			{question: "Will there be food?", answer: "All meals, snacks, and drinks will be provided for the entire weekend. If you have a dietary restriction, please make you mentioned it on the application. There will be a wide variety of food."},
			{question: "Where do I sleep?", answer: "Sleeping rooms will be furnished with air mattresses and pillows. We want you to be comfortable!"},
			{question: "When should I arrive?", answer: "You should arrive by 5 PM on Friday. A schedule will be released soon. Departure will be at 5 PM Sunday."},
			{question: "What should I bring?", answer: "You should bring a student ID, a change of clothing or two, personal items (toiletries), a laptop & charger, and any required hardware for your project. Essentially, bring anything you would need for a normal weekend. Due to power concerns, please do not bring extra monitors or desktop computers."},
			{question: "Do I need a team?", answer: "Absolutely not! Many attendees come without a team and find a group at the event. We will be providing mentor matching and a team formation workshop for you to meet other like-minded individuals."},
			{question: "Will you have hardware?", answer: "We'll have high-level hardware provided by companies. We'll also have basic hardware components like resistors, transistors, and ICs, as well as wood, building materials, and power tools for you to tinker with."},
        ];

		let listItems = faqs.map( (item, index) => {
			return (
				<FAQItem key={index} header={item.question}>
					{item.answer}
				</FAQItem>
			);
		});

		return(
			<div className="FAQ">
				{listItems}
			</div>
        );
    }
}

export default FAQ
