const personal_fields = [
  {
    fieldType: 'input',
    id: 'firstName',
    placeholder: 'John',
    title: 'FIRST NAME'
  },
  {
    fieldType: 'input',
    id: 'lastName',
    placeholder: 'Doe',
    title: 'LAST NAME' 
  },
  {
    fieldType: 'input',
    id: 'email',
    placeholder: 'hacker@hacker.org',
    title: 'EMAIL'
  },
  {
    fieldType: 'input',
    id: 'github',
    placeholder: 'hackers',
    title: 'GITHUB USERNAME'
  },
  {
    fieldType: 'select',
    id: 'school',
    values: ['Select a School', 'University of Illinois Urbana - Champaign', 'Anna University','Appalachian State University','Arizona State University','Babson College','Ball State University','Bard College','Barnard College','Baruch College','Bellevue College','Benha University','Binghamton University','Boise State University','Boston College','Boston University','Brown University','Bryn Mawr College','Bucknell University','California Institute of Technology','California Polytechnic State University','California State University-Long Beach','Carleton College','Carnegie Mellon University','Case Western Reserve University','Clark University','Colegio Americano de Torren','College of Dupage','College of William and Mary','Columbia University','Concordia University Wisconsin','Cornell University','DePaul University','DePauw University','Diablo Valley College','Drexel University','Duke University','Earlham College','Eastern Michigan University','Embry-Riddle Aeronautical University','Emory University','ETH Zurich','Florida Institute of Technology','Florida International University','Florida State University','Foothill College','George Mason University','George Washington University','Georgia Institute of Technology','Georgia State University','Grinnell College','Harper College','Harvard University','Howard University','Illinois Institute of Technology','Illinois State University','Illinois Wesleyan University','Indiana University - Bloomington','Indiana University - Purdue University Indianapolis','Iowa State University','Kansas State University','Kent State University','Knox College','Lehigh University','Lewis University','Liceo Tecnologico Scientifico Salesiani Don Bosco','Lindenwood University','Los Angeles Pierce College','Marist College','Marquette University','Massachusetts Institute of Technology','McGill University','McMaster University','Messiah College','Miami University','Michigan State University','Michigan Technological University','Middle Tennessee State University','Milwaukee School of Engineering','Mission College','Mississippi State University','Missouri State University','Monmouth College','New York University','New York University Shanghai','North Carolina State University','North Dakota State University','Northeastern Illinois University','Northeastern University','Northern Illinois University','Northwestern University','Notre Dame University','Oakton Community College','Ohio State University','Ohlone College','Oregon State University','Parkland College','Pennsylvania State University',"Prince George's Community College",'Princeton University','Purdue University',"Queen's University",'Rensselaer Polytechnic Institute','Rhode Island School of Design','Rice University','Rochester Institute of Technology','Rose-Hulman Institute of Technology','Rutgers University','Saginaw Valley State University','San Jose State University','Santa Clara University','Savannah College of Art and Design','School of Visual Arts','Southern Connecticut State University','Southern Illinois University - Carbondale','Southern Illinois University - Edwardsville','Southern Methodist University','St. Cloud State University',"St. John's University",'St. Louis University','Stanford University','Stetson University','Stevens Institute of Technology','Stony Brook University','SUNY Albany','SUNY Stony Brook University','Tallahassee Community College','Tecnolgico de Monterrey (ITESM)','Temple University','Texas A&M University','The New School/Parsons','The University of North Carolina at Chapel Hill','The University of Texas at Dallas','Tufts University','Tulsa Community College','University College London (UCL)','University of Arizona','University of British Columbia','University of Buffalo','University of Calfornia - Los Angeles','University of California - Berkeley','University of California - Davis','University of California - Irvine','University of California - Merced','University of California - San Diego','University of California - Santa Barbara','University of California - Santa Cruz','University of Central Florida','University of Chicago','University of Cincinnati','University of Colorado - Boulder','University of Florida','University of Georgia','University of Houston','University of Illinois - Chicago','University of Illinois - SpringfieldType','University of Iowa','University of Kansas','University of Louisiana at Monroe','University of Louisville','University of Maryland','University of Maryland-Baltimore County','University of Massachusetts','University of Massachusetts Amherst','University of Michigan - Ann Arbor','University of Minnesota - Twin Cities','University of Missouri','University of Missouri - Kansas City','University of Nebraska - Lincoln','University of North Carolina at Chapel Hill','University of North Texas','University of Notre Dame','University of Oxford','University of Pennsylvania','University of Pittsburgh','University of Puerto Rico - Bayamon','University of Rochester','University of San Francisco','University of Southern California','University of Texas - Austin','University of Texas - Dallas','University of Texas Rio Grande Valley','University of Toledo','University of Toronto','University of Tulsa','University of Virginia','University of Washington','University of Waterloo','University of Windsor','University of Wisconsin - Madison','University of Wisconsin - Milwaukee','University of Wisconsin - Platteville','University Texas - Dallas','Vanderbilt University','Villanova University','Virginia Polytechnic Institute and State University (Virginia Tech)','Washington University in St. Louis','Westminster College','Wheaton College','Worcester Polytechnic Institute','Wright State University','Yale University', 'Other'],
    options: ['Select a School', 'University of Illinois Urbana - Champaign', 'Anna University','Appalachian State University','Arizona State University','Babson College','Ball State University','Bard College','Barnard College','Baruch College','Bellevue College','Benha University','Binghamton University','Boise State University','Boston College','Boston University','Brown University','Bryn Mawr College','Bucknell University','California Institute of Technology','California Polytechnic State University','California State University-Long Beach','Carleton College','Carnegie Mellon University','Case Western Reserve University','Clark University','Colegio Americano de Torren','College of Dupage','College of William and Mary','Columbia University','Concordia University Wisconsin','Cornell University','DePaul University','DePauw University','Diablo Valley College','Drexel University','Duke University','Earlham College','Eastern Michigan University','Embry-Riddle Aeronautical University','Emory University','ETH Zurich','Florida Institute of Technology','Florida International University','Florida State University','Foothill College','George Mason University','George Washington University','Georgia Institute of Technology','Georgia State University','Grinnell College','Harper College','Harvard University','Howard University','Illinois Institute of Technology','Illinois State University','Illinois Wesleyan University','Indiana University - Bloomington','Indiana University - Purdue University Indianapolis','Iowa State University','Kansas State University','Kent State University','Knox College','Lehigh University','Lewis University','Liceo Tecnologico Scientifico Salesiani Don Bosco','Lindenwood University','Los Angeles Pierce College','Marist College','Marquette University','Massachusetts Institute of Technology','McGill University','McMaster University','Messiah College','Miami University','Michigan State University','Michigan Technological University','Middle Tennessee State University','Milwaukee School of Engineering','Mission College','Mississippi State University','Missouri State University','Monmouth College','New York University','New York University Shanghai','North Carolina State University','North Dakota State University','Northeastern Illinois University','Northeastern University','Northern Illinois University','Northwestern University','Notre Dame University','Oakton Community College','Ohio State University','Ohlone College','Oregon State University','Parkland College','Pennsylvania State University',"Prince George's Community College",'Princeton University','Purdue University',"Queen's University",'Rensselaer Polytechnic Institute','Rhode Island School of Design','Rice University','Rochester Institute of Technology','Rose-Hulman Institute of Technology','Rutgers University','Saginaw Valley State University','San Jose State University','Santa Clara University','Savannah College of Art and Design','School of Visual Arts','Southern Connecticut State University','Southern Illinois University - Carbondale','Southern Illinois University - Edwardsville','Southern Methodist University','St. Cloud State University',"St. John's University",'St. Louis University','Stanford University','Stetson University','Stevens Institute of Technology','Stony Brook University','SUNY Albany','SUNY Stony Brook University','Tallahassee Community College','Tecnolgico de Monterrey (ITESM)','Temple University','Texas A&M University','The New School/Parsons','The University of North Carolina at Chapel Hill','The University of Texas at Dallas','Tufts University','Tulsa Community College','University College London (UCL)','University of Arizona','University of British Columbia','University of Buffalo','University of Calfornia - Los Angeles','University of California - Berkeley','University of California - Davis','University of California - Irvine','University of California - Merced','University of California - San Diego','University of California - Santa Barbara','University of California - Santa Cruz','University of Central Florida','University of Chicago','University of Cincinnati','University of Colorado - Boulder','University of Florida','University of Georgia','University of Houston','University of Illinois - Chicago','University of Illinois - SpringfieldType','University of Iowa','University of Kansas','University of Louisiana at Monroe','University of Louisville','University of Maryland','University of Maryland-Baltimore County','University of Massachusetts','University of Massachusetts Amherst','University of Michigan - Ann Arbor','University of Minnesota - Twin Cities','University of Missouri','University of Missouri - Kansas City','University of Nebraska - Lincoln','University of North Carolina at Chapel Hill','University of North Texas','University of Notre Dame','University of Oxford','University of Pennsylvania','University of Pittsburgh','University of Puerto Rico - Bayamon','University of Rochester','University of San Francisco','University of Southern California','University of Texas - Austin','University of Texas - Dallas','University of Texas Rio Grande Valley','University of Toledo','University of Toronto','University of Tulsa','University of Virginia','University of Washington','University of Waterloo','University of Windsor','University of Wisconsin - Madison','University of Wisconsin - Milwaukee','University of Wisconsin - Platteville','University Texas - Dallas','Vanderbilt University','Villanova University','Virginia Polytechnic Institute and State University (Virginia Tech)','Washington University in St. Louis','Westminster College','Wheaton College','Worcester Polytechnic Institute','Wright State University','Yale University', 'Other'],
    title: 'SCHOOL'
  },
  {
    fieldType: 'input',
    id: 'major',
    placeholder: 'What do you do ?',
    title: 'MAJOR'
  },
  {
    fieldType: 'input',
    id: 'graduationYear',
    placeholder: 'When are you outta here ?',
    title: 'GRAD YEAR'
  },
  {
    fieldType: 'select',
    id: 'transportation',
    values: ['NOT_NEEDED', 'BUS_REQUESTED', 'IN_STATE', 'OUT_OF_STATE'],
    options: ['Don\'t need one', 'Need a Bus', 'In State', 'Out of State'],
    placeholder: 'Select how you\'re getting here',
    title: 'TRANSPORTATION'
  },
  {
    fieldType: 'select',
    id: 'shirtSize',
    values: ['S','M','L','XL'],
    options: ['S','M','L','XL'], 
    placeholder: 'Yay for t-shirts',
    title: 'SHIRT SIZE'
  },
  {
    fieldType: 'select',
    id: 'diet',
    values: ['NONE','VEGETARIAN', 'VEGAN', 'GLUTEN_FREE'],
    options: ['None','Vegetarian', 'Vegan', 'Gluten Free'],
    placeholder: 'Let us feed you the right things',
    title: 'DIETARY RESTRICTIONS'
  },
  {
    fieldType: 'select',
    id: 'gender',
    values: ['FEMALE', 'MALE', 'NON_BINARY', 'OTHER'],
    options: ['Female', 'Male', 'None Binary', 'Other'],
    placeholder: 'What is your gender ?',
    title: 'GENDER'
  },
  {
    fieldType: 'input',
    id: 'age',
    placeholder: 'How old are you ?',
    title: 'AGE' 
  }
]

const profressional_fields = [
  {
    fieldType: 'select',
    id: 'isNovice',
    values: [true, false],
    options: ['YES', 'NO'],
    title: 'ARE YOU A BEGINNER?'
  },
  {
    fieldType: 'input',
    id: 'linkedin',
    placeholder: 'Less than 50 characters',
    title: 'LINKEDIN USERNAME'
  },
  {
    fieldType: 'input',
    inputType: 'file',
    id: 'resume',
    title: 'RESUME (PDF)'
  },
  {
    fieldType: 'select',
    id: 'professionalInterest',
    values: ['NONE','INTERNSHIP','FULLTIME','BOTH'],
    options: ['None','Internship','Full-Time','Both'],
    title: 'PROFRESSIONAL INTERESTS'
  },
  {
    fieldType: 'input',
    id: 'phoneNumber',
    placeholder: 'Can we have it ?',
    title: 'PHONE NUMBER'

  },
  {
    fieldType: 'input',
    id: 'interests',
    required: false,
    placeholder: 'What do you like?',
    title: 'INTERESTS(OPTIONAL)'
  },
  {
    fieldType: 'select',
    id: 'hasLightningInterest',
    values: [true, false],
    options: ['YES', 'NO'],
    title: 'Are you interested in giving a short (<5 min) lightning talk on a topic of your choice ?'
  },
  {
    fieldType: 'select',
    id: 'isPrivate',
    values: [true, false],
    options: ['YES', 'NO'],
    title: 'We\'d love to connect you to awesome opportuniities at sponsoring companies. Is it okay if we share your information with our sponsors?'
  }
]

export {personal_fields, profressional_fields}
