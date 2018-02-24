import React, { Component } from 'react'

import styles from './faq.scss'

class FAQItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={"FAQItem" + (this.props.centered ? ' BottomItem' : '')}>
				<h3 className={"FAQ__itemHeader" + (this.props.centered ? ' centered-faq-big' : '')}>{this.props.header}</h3>
				<p className={(this.props.centered ? ' centered-faq-big' : '')}>{this.props.children}</p>
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

		let faqs = [[
			{question: "Where is HackIllinois held?", answer: "HackIllinois is held on the University of Illinois at Urbana-Champaign campus at the Siebel Center for Computer Science and the Electrical and Computer Engineering Building."},
			{question: "Are there travel reimbursements?", answer: ["We are planning to have buses going to various ", <a href='https://hackillinois.org/busses' target='_blank'>schools</a>, " in lieu of travel reimbursements."]},
			{question: "Will there be food?", answer: "A large variety of meals, snacks, and drinks will be provided for the entire weekend. If you have a dietary restriction, please mention it on your application."},
			{question: "Where do I sleep?", answer: "Sleeping rooms will be furnished with air mattresses. We want you to be comfortable!"},
			{question: "What's the Code of Conduct?", answer: "You can see the Code of Conduct at hackillinois.org/coc."}
		], [
		  {question: "When should I arrive?", answer: "You should arrive by 5 PM on Friday and leave by 5 PM on Sunday. A finalized schedule will be released soon!"},
			{question: "What should I bring?", answer: "You should bring your student ID, a change of clothing or two, toiletries, a laptop and charger, and any required hardware for your project. Essentially, bring anything you would need for a normal weekend. However, due to power draw concerns, please do not bring extra monitors or desktop computers."},
			{question: "Do I need a team?", answer: "Absolutely not! Many attendees come without teams and find groups during the event. There will be mentor matching and team formation workshops for you to meet other like-minded individuals."},
			{question: "Will you have hardware?", answer: "Some companies may provide high level hardware. We will also have basic hardware components like resistors, transistors, and ICs for you to tinker with."}
		]];

		let faqs_unused = [
			{question: "What are the prizes?", answer: ["You can see all potential prizes and prize criteria at ", <a href='https://hackillinois.org/prizes'>https://hackillinois.org/prizes</a>, "."]},
			{question: "What will contributors work on?", answer: ["If you RSVPed to the Contribute track, you will be working on one of the projects in the ecosystem in which you were accepted. See: ", <a href='https://hackillinois.org/projects'>https://hackillinois.org/projects</a>, '.']},
    ];

		let columns = faqs.map( (col) => {
			let colItems = col.map( (item) => {
				return (
					<FAQItem header={item.question}>
						{item.answer}
					</FAQItem>
				);
			});

			return (
				<div className="FAQ_list_column">
					{colItems}
				</div>
			);
		});
		let centeredContactQ = {question: "Other questions?", answer: ["Please don't hesitate to reach out to us at ", <a href='mailto:contact@hackillinois.org'>contact@hackillinois.org</a>, "!"]};
		return(
			<div className="FAQ">
				<div className="container">
					<h1>FAQs</h1>
					<div className="spacer" />
					<div className="FAQ_list">
						{columns}
					</div>
					<FAQItem className="contactFAQ" header={centeredContactQ.question} centered={true}>
						{centeredContactQ.answer}
					</FAQItem>
				</div>
			</div>
        );
    }
}

export default FAQ
