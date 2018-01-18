import React, { Component } from 'react'

import styles from './faq.scss'

class FAQItem extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="FAQItem">
				<h3 className="FAQ__itemHeader">{this.props.header}</h3>
				<p>{this.props.children}</p>
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
			{question: "Are there travel reimbursements?", answer: "Unfortunately, we will not be able to provide travel reimbursements to student attendees. However, we will have buses going to 11 schools."},
			{question: "Will there be food?", answer: "All meals, snacks, and drinks will be provided for the entire weekend. If you have a dietary restriction, please mention it on your application. There will be a wide variety of food."},
			{question: "Where do I sleep?", answer: "Sleeping rooms will be furnished with air mattresses and pillows. We want you to be comfortable!"},
			{question: "When should I arrive?", answer: "You should arrive by 5 PM on Friday and leave by 5 PM on Sunday. We will release a schedule soon."}

		], [
			{question: "What should I bring?", answer: "You should bring a student ID, a change of clothing or two, toiletries, a laptop and charger, and any required hardware for your project. Essentially, bring anything you would need for a normal weekend. Due to power draw concerns, please do not bring extra monitors or desktop computers."},
			{question: "Do I need a team?", answer: "Absolutely not! Many attendees come without a team and find a group at the event. We will be providing mentor matching and a team formation workshop for you to meet other like-minded individuals."},
			{question: "Will you have hardware?", answer: "We'll have high-level hardware provided by companies. We'll also have basic hardware components like resistors, transistors, and ICs, as well as wood, building materials, and power tools for you to tinker with."}
		]];

		let faqs_unused = [
			{question: "What are the prizes?", answer: ["You can see all potential prizes and prize criteria at ", <a href='https://hackillinois.org/prizes'>https://hackillinois.org/prizes</a>, "."]},
			{question: "What will contributors work on?", answer: ["If you RSVPed to the Contribute track, you will be working on one of the projects in the ecosystem in which you were accepted. See: ", <a href='https://hackillinois.org/projects'>https://hackillinois.org/projects</a>, '.']},
			{question: "Other questions?", answer: ["Please don't hesitate to reach out to us at ", <a href='mailto:contact@hackillinois.org'>contact@hackillinois.org</a>, "!"]},
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

		return(
			<div className="FAQ">
				<div className="container">
					<h1>We thought you might have some questions.</h1>
					<div className="spacer" />
					<div className="FAQ_list">
						{columns}
					</div>
				</div>
			</div>
        );
    }
}

export default FAQ
