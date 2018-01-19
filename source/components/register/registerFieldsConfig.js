const personal_fields = [
  {
    width: 8,
    fieldType: 'input',
    inputType: 'email',
    id: 'email',
    required: true,
    placeholder: 'hacker@hacker.org',
    title: 'EMAIL',
    validate: (input) => {
      console.log(input);
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'select',
    id: 'transportation',
    required: true,
    options: [{key: 'NOT_NEEDED', text: 'Don\'t need one', value:'NOT_NEEDED'}, {key: 'BUS_REQUESTED', text: 'Need a bus', value:'BUS_REQUESTED'}, {key: 'IN_STATE', text: 'In State', value:'IN_STATE'}, {key: 'OUT_OF_STATE', text: 'Out of State', value:'OUT_OF_STATE'}],
    placeholder: 'Select how you\'re getting here',
    title: 'TRANSPORTATION',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'input',
    inputType: 'text',
    id: 'github',
    required: true,
    placeholder: 'octocat',
    title: 'GITHUB USERNAME',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'select',
    id: 'shirtSize',
    required: true,
    options: [{key: 'S', text: 'S', value: 'S'}, {key: 'M', text: 'M', value: 'M'}, {key: 'L', text: 'L', value: 'L'}, {key: 'XL', text: 'XL', value: 'XL'}],
    placeholder: 'Yay for t-shirts',
    title: 'SHIRT SIZE',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'input',
    inputType: 'text',
    id: 'major',
    required: true,
    placeholder: 'What do you do ?',
    title: 'MAJOR',
    validate: (input) => {
      return input.length > 0 && input.length <= 255;
    }
  },
  {
    width: 8,
    fieldType: 'select',
    id: 'diet',
    required: true,
    options: [{key: 'NONE', text: 'None', value: 'NONE'}, {key: 'VEGETARIAN', text: 'Vegetarian', value: 'VEGETARIAN'}, {key: 'VEGAN', text: 'Vegan', value: 'VEGAN'}, {key: 'GLUTEN_FREE', text: 'Gluten Free', value: 'GLUTEN_FREE'}],
    placeholder: 'Let us feed you the right things',
    title: 'DIETARY RESTRICTIONS',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'input',
    inputType: 'text',
    id: 'graduationYear',
    required: true,
    placeholder: 'When are you outta here ?',
    title: 'GRAD YEAR',
    validate: (input) => {
      console.log(input);
      let year = Number(input);
      if (year == NaN) {
        return false;
      }
      return year >= 2017 && year <= 2024;
    }
  },
  {
    width: 8,
    fieldType: 'select',
    id: 'gender',
    required: true,
    options: [{key: 'FEMALE', text: 'Female', value: 'FEMALE'}, {key: 'MALE', text: 'Male', value: 'MALE'}, {key: 'NON_BINARY', text: 'None Binary', value: 'NON_BINARY'}, {key: 'OTHER', text: 'Other', value: 'OTHER'}],
    placeholder: 'What is your gender ?',
    title: 'GENDER',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'select',
    id: 'school',
    required: true,
    options: [{key: 'University of Illinois Urbana - Champaign', text: 'University of Illinois Urbana - Champaign', value: 'University of Illinois Urbana - Champaign'}, {key: 'Anna University', text: 'Anna University', value: 'Anna University'}, {key: 'Appalachian State University', text: 'Appalachian State University', value: 'Appalachian State University'}, {key: 'Arizona State University', text: 'Arizona State University', value: 'Arizona State University'}, {key: 'Babson College', text: 'Babson College', value: 'Babson College'}, {key: 'Ball State University', text: 'Ball State University', value: 'Ball State University'}, {key: 'Bard College', text: 'Bard College', value: 'Bard College'}, {key: 'Barnard College', text: 'Barnard College', value: 'Barnard College'}, {key: 'Baruch College', text: 'Baruch College', value: 'Baruch College'}, {key: 'Bellevue College', text: 'Bellevue College', value: 'Bellevue College'}, {key: 'Benha University', text: 'Benha University', value: 'Benha University'}, {key: 'Binghamton University', text: 'Binghamton University', value: 'Binghamton University'}, {key: 'Boise State University', text: 'Boise State University', value: 'Boise State University'}, {key: 'Boston College', text: 'Boston College', value: 'Boston College'}, {key: 'Boston University', text: 'Boston University', value: 'Boston University'}, {key: 'Brown University', text: 'Brown University', value: 'Brown University'}, {key: 'Bryn Mawr College', text: 'Bryn Mawr College', value: 'Bryn Mawr College'}, {key: 'Bucknell University', text: 'Bucknell University', value: 'Bucknell University'}, {key: 'California Institute of Technology', text: 'California Institute of Technology', value: 'California Institute of Technology'}, {key: 'California Polytechnic State University', text: 'California Polytechnic State University', value: 'California Polytechnic State University'}, {key: 'California State University-Long Beach', text: 'California State University-Long Beach', value: 'California State University-Long Beach'}, {key: 'Carleton College', text: 'Carleton College', value: 'Carleton College'}, {key: 'Carnegie Mellon University', text: 'Carnegie Mellon University', value: 'Carnegie Mellon University'}, {key: 'Case Western Reserve University', text: 'Case Western Reserve University', value: 'Case Western Reserve University'}, {key: 'Clark University', text: 'Clark University', value: 'Clark University'}, {key: 'Colegio Americano de Torren', text: 'Colegio Americano de Torren', value: 'Colegio Americano de Torren'}, {key: 'College of Dupage', text: 'College of Dupage', value: 'College of Dupage'}, {key: 'College of William and Mary', text: 'College of William and Mary', value: 'College of William and Mary'}, {key: 'Columbia University', text: 'Columbia University', value: 'Columbia University'}, {key: 'Concordia University Wisconsin', text: 'Concordia University Wisconsin', value: 'Concordia University Wisconsin'}, {key: 'Cornell University', text: 'Cornell University', value: 'Cornell University'}, {key: 'DePaul University', text: 'DePaul University', value: 'DePaul University'}, {key: 'DePauw University', text: 'DePauw University', value: 'DePauw University'}, {key: 'Diablo Valley College', text: 'Diablo Valley College', value: 'Diablo Valley College'}, {key: 'Drexel University', text: 'Drexel University', value: 'Drexel University'}, {key: 'Duke University', text: 'Duke University', value: 'Duke University'}, {key: 'Earlham College', text: 'Earlham College', value: 'Earlham College'}, {key: 'Eastern Michigan University', text: 'Eastern Michigan University', value: 'Eastern Michigan University'}, {key: 'Embry-Riddle Aeronautical University', text: 'Embry-Riddle Aeronautical University', value: 'Embry-Riddle Aeronautical University'}, {key: 'Emory University', text: 'Emory University', value: 'Emory University'}, {key: 'ETH Zurich', text: 'ETH Zurich', value: 'ETH Zurich'}, {key: 'Florida Institute of Technology', text: 'Florida Institute of Technology', value: 'Florida Institute of Technology'}, {key: 'Florida International University', text: 'Florida International University', value: 'Florida International University'}, {key: 'Florida State University', text: 'Florida State University', value: 'Florida State University'}, {key: 'Foothill College', text: 'Foothill College', value: 'Foothill College'}, {key: 'George Mason University', text: 'George Mason University', value: 'George Mason University'}, {key: 'George Washington University', text: 'George Washington University', value: 'George Washington University'}, {key: 'Georgia Institute of Technology', text: 'Georgia Institute of Technology', value: 'Georgia Institute of Technology'}, {key: 'Georgia State University', text: 'Georgia State University', value: 'Georgia State University'}, {key: 'Grinnell College', text: 'Grinnell College', value: 'Grinnell College'}, {key: 'Harper College', text: 'Harper College', value: 'Harper College'}, {key: 'Harvard University', text: 'Harvard University', value: 'Harvard University'}, {key: 'Howard University', text: 'Howard University', value: 'Howard University'}, {key: 'Illinois Institute of Technology', text: 'Illinois Institute of Technology', value: 'Illinois Institute of Technology'}, {key: 'Illinois State University', text: 'Illinois State University', value: 'Illinois State University'}, {key: 'Illinois Wesleyan University', text: 'Illinois Wesleyan University', value: 'Illinois Wesleyan University'}, {key: 'Indiana University - Bloomington', text: 'Indiana University - Bloomington', value: 'Indiana University - Bloomington'}, {key: 'Indiana University - Purdue University Indianapolis', text: 'Indiana University - Purdue University Indianapolis', value: 'Indiana University - Purdue University Indianapolis'}, {key: 'Iowa State University', text: 'Iowa State University', value: 'Iowa State University'}, {key: 'Kansas State University', text: 'Kansas State University', value: 'Kansas State University'}, {key: 'Kent State University', text: 'Kent State University', value: 'Kent State University'}, {key: 'Knox College', text: 'Knox College', value: 'Knox College'}, {key: 'Lehigh University', text: 'Lehigh University', value: 'Lehigh University'}, {key: 'Lewis University', text: 'Lewis University', value: 'Lewis University'}, {key: 'Liceo Tecnologico Scientifico Salesiani Don Bosco', text: 'Liceo Tecnologico Scientifico Salesiani Don Bosco', value: 'Liceo Tecnologico Scientifico Salesiani Don Bosco'}, {key: 'Lindenwood University', text: 'Lindenwood University', value: 'Lindenwood University'}, {key: 'Los Angeles Pierce College', text: 'Los Angeles Pierce College', value: 'Los Angeles Pierce College'}, {key: 'Marist College', text: 'Marist College', value: 'Marist College'}, {key: 'Marquette University', text: 'Marquette University', value: 'Marquette University'}, {key: 'Massachusetts Institute of Technology', text: 'Massachusetts Institute of Technology', value: 'Massachusetts Institute of Technology'}, {key: 'McGill University', text: 'McGill University', value: 'McGill University'}, {key: 'McMaster University', text: 'McMaster University', value: 'McMaster University'}, {key: 'Messiah College', text: 'Messiah College', value: 'Messiah College'}, {key: 'Miami University', text: 'Miami University', value: 'Miami University'}, {key: 'Michigan State University', text: 'Michigan State University', value: 'Michigan State University'}, {key: 'Michigan Technological University', text: 'Michigan Technological University', value: 'Michigan Technological University'}, {key: 'Middle Tennessee State University', text: 'Middle Tennessee State University', value: 'Middle Tennessee State University'}, {key: 'Milwaukee School of Engineering', text: 'Milwaukee School of Engineering', value: 'Milwaukee School of Engineering'}, {key: 'Mission College', text: 'Mission College', value: 'Mission College'}, {key: 'Mississippi State University', text: 'Mississippi State University', value: 'Mississippi State University'}, {key: 'Missouri State University', text: 'Missouri State University', value: 'Missouri State University'}, {key: 'Monmouth College', text: 'Monmouth College', value: 'Monmouth College'}, {key: 'New York University', text: 'New York University', value: 'New York University'}, {key: 'New York University Shanghai', text: 'New York University Shanghai', value: 'New York University Shanghai'}, {key: 'North Carolina State University', text: 'North Carolina State University', value: 'North Carolina State University'}, {key: 'North Dakota State University', text: 'North Dakota State University', value: 'North Dakota State University'}, {key: 'Northeastern Illinois University', text: 'Northeastern Illinois University', value: 'Northeastern Illinois University'}, {key: 'Northeastern University', text: 'Northeastern University', value: 'Northeastern University'}, {key: 'Northern Illinois University', text: 'Northern Illinois University', value: 'Northern Illinois University'}, {key: 'Northwestern University', text: 'Northwestern University', value: 'Northwestern University'}, {key: 'Notre Dame University', text: 'Notre Dame University', value: 'Notre Dame University'}, {key: 'Oakton Community College', text: 'Oakton Community College', value: 'Oakton Community College'}, {key: 'Ohio State University', text: 'Ohio State University', value: 'Ohio State University'}, {key: 'Ohlone College', text: 'Ohlone College', value: 'Ohlone College'}, {key: 'Oregon State University', text: 'Oregon State University', value: 'Oregon State University'}, {key: 'Parkland College', text: 'Parkland College', value: 'Parkland College'}, {key: 'Pennsylvania State University', text: 'Pennsylvania State University', value: 'Pennsylvania State University'}, {key: "Prince George's Community College", text: "Prince George's Community College", value: "Prince George's Community College"}, {key: 'Princeton University', text: 'Princeton University', value: 'Princeton University'}, {key: 'Purdue University', text: 'Purdue University', value: 'Purdue University'}, {key: "Queen's University", text: "Queen's University", value: "Queen's University"}, {key: 'Rensselaer Polytechnic Institute', text: 'Rensselaer Polytechnic Institute', value: 'Rensselaer Polytechnic Institute'}, {key: 'Rhode Island School of Design', text: 'Rhode Island School of Design', value: 'Rhode Island School of Design'}, {key: 'Rice University', text: 'Rice University', value: 'Rice University'}, {key: 'Rochester Institute of Technology', text: 'Rochester Institute of Technology', value: 'Rochester Institute of Technology'}, {key: 'Rose-Hulman Institute of Technology', text: 'Rose-Hulman Institute of Technology', value: 'Rose-Hulman Institute of Technology'}, {key: 'Rutgers University', text: 'Rutgers University', value: 'Rutgers University'}, {key: 'Saginaw Valley State University', text: 'Saginaw Valley State University', value: 'Saginaw Valley State University'}, {key: 'San Jose State University', text: 'San Jose State University', value: 'San Jose State University'}, {key: 'Santa Clara University', text: 'Santa Clara University', value: 'Santa Clara University'}, {key: 'Savannah College of Art and Design', text: 'Savannah College of Art and Design', value: 'Savannah College of Art and Design'}, {key: 'School of Visual Arts', text: 'School of Visual Arts', value: 'School of Visual Arts'}, {key: 'Southern Connecticut State University', text: 'Southern Connecticut State University', value: 'Southern Connecticut State University'}, {key: 'Southern Illinois University - Carbondale', text: 'Southern Illinois University - Carbondale', value: 'Southern Illinois University - Carbondale'}, {key: 'Southern Illinois University - Edwardsville', text: 'Southern Illinois University - Edwardsville', value: 'Southern Illinois University - Edwardsville'}, {key: 'Southern Methodist University', text: 'Southern Methodist University', value: 'Southern Methodist University'}, {key: 'St. Cloud State University', text: 'St. Cloud State University', value: 'St. Cloud State University'}, {key: "St. John's University", text: "St. John's University", value: "St. John's University"}, {key: 'St. Louis University', text: 'St. Louis University', value: 'St. Louis University'}, {key: 'Stanford University', text: 'Stanford University', value: 'Stanford University'}, {key: 'Stetson University', text: 'Stetson University', value: 'Stetson University'}, {key: 'Stevens Institute of Technology', text: 'Stevens Institute of Technology', value: 'Stevens Institute of Technology'}, {key: 'Stony Brook University', text: 'Stony Brook University', value: 'Stony Brook University'}, {key: 'SUNY Albany', text: 'SUNY Albany', value: 'SUNY Albany'}, {key: 'SUNY Stony Brook University', text: 'SUNY Stony Brook University', value: 'SUNY Stony Brook University'}, {key: 'Tallahassee Community College', text: 'Tallahassee Community College', value: 'Tallahassee Community College'}, {key: 'Tecnolgico de Monterrey (ITESM)', text: 'Tecnolgico de Monterrey (ITESM)', value: 'Tecnolgico de Monterrey (ITESM)'}, {key: 'Temple University', text: 'Temple University', value: 'Temple University'}, {key: 'Texas A&M University', text: 'Texas A&M University', value: 'Texas A&M University'}, {key: 'The New School/Parsons', text: 'The New School/Parsons', value: 'The New School/Parsons'}, {key: 'The University of North Carolina at Chapel Hill', text: 'The University of North Carolina at Chapel Hill', value: 'The University of North Carolina at Chapel Hill'}, {key: 'The University of Texas at Dallas', text: 'The University of Texas at Dallas', value: 'The University of Texas at Dallas'}, {key: 'Tufts University', text: 'Tufts University', value: 'Tufts University'}, {key: 'Tulsa Community College', text: 'Tulsa Community College', value: 'Tulsa Community College'}, {key: 'University College London (UCL)', text: 'University College London (UCL)', value: 'University College London (UCL)'}, {key: 'University of Arizona', text: 'University of Arizona', value: 'University of Arizona'}, {key: 'University of British Columbia', text: 'University of British Columbia', value: 'University of British Columbia'}, {key: 'University of Buffalo', text: 'University of Buffalo', value: 'University of Buffalo'}, {key: 'University of Calfornia - Los Angeles', text: 'University of Calfornia - Los Angeles', value: 'University of Calfornia - Los Angeles'}, {key: 'University of California - Berkeley', text: 'University of California - Berkeley', value: 'University of California - Berkeley'}, {key: 'University of California - Davis', text: 'University of California - Davis', value: 'University of California - Davis'}, {key: 'University of California - Irvine', text: 'University of California - Irvine', value: 'University of California - Irvine'}, {key: 'University of California - Merced', text: 'University of California - Merced', value: 'University of California - Merced'}, {key: 'University of California - San Diego', text: 'University of California - San Diego', value: 'University of California - San Diego'}, {key: 'University of California - Santa Barbara', text: 'University of California - Santa Barbara', value: 'University of California - Santa Barbara'}, {key: 'University of California - Santa Cruz', text: 'University of California - Santa Cruz', value: 'University of California - Santa Cruz'}, {key: 'University of Central Florida', text: 'University of Central Florida', value: 'University of Central Florida'}, {key: 'University of Chicago', text: 'University of Chicago', value: 'University of Chicago'}, {key: 'University of Cincinnati', text: 'University of Cincinnati', value: 'University of Cincinnati'}, {key: 'University of Colorado - Boulder', text: 'University of Colorado - Boulder', value: 'University of Colorado - Boulder'}, {key: 'University of Florida', text: 'University of Florida', value: 'University of Florida'}, {key: 'University of Georgia', text: 'University of Georgia', value: 'University of Georgia'}, {key: 'University of Houston', text: 'University of Houston', value: 'University of Houston'}, {key: 'University of Illinois - Chicago', text: 'University of Illinois - Chicago', value: 'University of Illinois - Chicago'}, {key: 'University of Illinois - SpringfieldType', text: 'University of Illinois - SpringfieldType', value: 'University of Illinois - SpringfieldType'}, {key: 'University of Iowa', text: 'University of Iowa', value: 'University of Iowa'}, {key: 'University of Kansas', text: 'University of Kansas', value: 'University of Kansas'}, {key: 'University of Louisiana at Monroe', text: 'University of Louisiana at Monroe', value: 'University of Louisiana at Monroe'}, {key: 'University of Louisville', text: 'University of Louisville', value: 'University of Louisville'}, {key: 'University of Maryland', text: 'University of Maryland', value: 'University of Maryland'}, {key: 'University of Maryland-Baltimore County', text: 'University of Maryland-Baltimore County', value: 'University of Maryland-Baltimore County'}, {key: 'University of Massachusetts', text: 'University of Massachusetts', value: 'University of Massachusetts'}, {key: 'University of Massachusetts Amherst', text: 'University of Massachusetts Amherst', value: 'University of Massachusetts Amherst'}, {key: 'University of Michigan - Ann Arbor', text: 'University of Michigan - Ann Arbor', value: 'University of Michigan - Ann Arbor'}, {key: 'University of Minnesota - Twin Cities', text: 'University of Minnesota - Twin Cities', value: 'University of Minnesota - Twin Cities'}, {key: 'University of Missouri', text: 'University of Missouri', value: 'University of Missouri'}, {key: 'University of Missouri - Kansas City', text: 'University of Missouri - Kansas City', value: 'University of Missouri - Kansas City'}, {key: 'University of Nebraska - Lincoln', text: 'University of Nebraska - Lincoln', value: 'University of Nebraska - Lincoln'}, {key: 'University of North Carolina at Chapel Hill', text: 'University of North Carolina at Chapel Hill', value: 'University of North Carolina at Chapel Hill'}, {key: 'University of North Texas', text: 'University of North Texas', value: 'University of North Texas'}, {key: 'University of Notre Dame', text: 'University of Notre Dame', value: 'University of Notre Dame'}, {key: 'University of Oxford', text: 'University of Oxford', value: 'University of Oxford'}, {key: 'University of Pennsylvania', text: 'University of Pennsylvania', value: 'University of Pennsylvania'}, {key: 'University of Pittsburgh', text: 'University of Pittsburgh', value: 'University of Pittsburgh'}, {key: 'University of Puerto Rico - Bayamon', text: 'University of Puerto Rico - Bayamon', value: 'University of Puerto Rico - Bayamon'}, {key: 'University of Rochester', text: 'University of Rochester', value: 'University of Rochester'}, {key: 'University of San Francisco', text: 'University of San Francisco', value: 'University of San Francisco'}, {key: 'University of Southern California', text: 'University of Southern California', value: 'University of Southern California'}, {key: 'University of Texas - Austin', text: 'University of Texas - Austin', value: 'University of Texas - Austin'}, {key: 'University of Texas - Dallas', text: 'University of Texas - Dallas', value: 'University of Texas - Dallas'}, {key: 'University of Texas Rio Grande Valley', text: 'University of Texas Rio Grande Valley', value: 'University of Texas Rio Grande Valley'}, {key: 'University of Toledo', text: 'University of Toledo', value: 'University of Toledo'}, {key: 'University of Toronto', text: 'University of Toronto', value: 'University of Toronto'}, {key: 'University of Tulsa', text: 'University of Tulsa', value: 'University of Tulsa'}, {key: 'University of Virginia', text: 'University of Virginia', value: 'University of Virginia'}, {key: 'University of Washington', text: 'University of Washington', value: 'University of Washington'}, {key: 'University of Waterloo', text: 'University of Waterloo', value: 'University of Waterloo'}, {key: 'University of Windsor', text: 'University of Windsor', value: 'University of Windsor'}, {key: 'University of Wisconsin - Madison', text: 'University of Wisconsin - Madison', value: 'University of Wisconsin - Madison'}, {key: 'University of Wisconsin - Milwaukee', text: 'University of Wisconsin - Milwaukee', value: 'University of Wisconsin - Milwaukee'}, {key: 'University of Wisconsin - Platteville', text: 'University of Wisconsin - Platteville', value: 'University of Wisconsin - Platteville'}, {key: 'University Texas - Dallas', text: 'University Texas - Dallas', value: 'University Texas - Dallas'}, {key: 'Vanderbilt University', text: 'Vanderbilt University', value: 'Vanderbilt University'}, {key: 'Villanova University', text: 'Villanova University', value: 'Villanova University'}, {key: 'Virginia Polytechnic Institute and State University (Virginia Tech)', text: 'Virginia Polytechnic Institute and State University (Virginia Tech)', value: 'Virginia Polytechnic Institute and State University (Virginia Tech)'}, {key: 'Washington University in St. Louis', text: 'Washington University in St. Louis', value: 'Washington University in St. Louis'}, {key: 'Westminster College', text: 'Westminster College', value: 'Westminster College'}, {key: 'Wheaton College', text: 'Wheaton College', value: 'Wheaton College'}, {key: 'Worcester Polytechnic Institute', text: 'Worcester Polytechnic Institute', value: 'Worcester Polytechnic Institute'}, {key: 'Wright State University', text: 'Wright State University', value: 'Wright State University'}, {key: 'Yale University', text: 'Yale University', value: 'Yale University'}, {key: 'Other', text: 'Other', value: 'Other'}],
    placeholder: 'Which school do you go ?',
    title: 'SCHOOL',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'input',
    inputType: 'text',
    id: 'age',
    required: true,
    placeholder: 'How old are you ?',
    title: 'AGE',
    validate: (input) => {
      let age = Number(input);
      if (age == NaN) {
        return false;
      }
      return age >= 13 && age <= 115;
    }
  }
]

const professional_fields = [
  {
    width: 8,
    fieldType: 'select',
    id: 'isNovice',
    required: true,
    options: [{key: 'YES', text: 'YES', value: 'true'}, {key: 'NO', text: 'NO', value: 'false'}],
    placeholder: 'Are you though?',
    title: 'ARE YOU A BEGINNER?',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'input',
    inputType: 'text',
    id: 'linkedin',
    required: true,
    placeholder: 'Less than 50 characters',
    title: 'LINKEDIN USERNAME',
    validate: (input) => {
      return input.length > 0 && input.length <= 50;
    }

  },
  {
    width: 8,
    fieldType: 'input',
    inputType: 'file',
    id: 'resume',
    required: true,
    title: 'RESUME (PDF)',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'select',
    inputType: 'text',
    id: 'professionalInterest',
    required: true,
    options: [{key: 'NONE', text: 'None', value: 'NONE'}, {key: 'INTERNSHIP', text: 'Internship', value: 'INTERNSHIP'}, {key: 'FULLTIME', text: 'Full-Time', value: 'FULLTIME'}, {key: 'BOTH', text: 'Both', value: 'BOTH'}],
    placeholder: 'Got any?',
    title: 'professional INTERESTS',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 8,
    fieldType: 'input',
    inputType: 'text',
    id: 'phoneNumber',
    required: true,
    placeholder: 'Can we have it ?',
    title: 'PHONE NUMBER',
    validate: (input) => {
      return input.length > 0 && input.length <= 15;
    }
  },
  {
    width: 8,
    fieldType: 'input',
    id: 'interests',
    required: false,
    placeholder: 'What do you like?',
    title: 'INTERESTS(OPTIONAL)',
    validate: (input) => {
      return input.length <= 255;
    }
  },
  {
    width: 16,
    fieldType: 'select',
    inputType: 'text',
    id: 'hasLightningInterest',
    required: true,
    options: [{key: 'YES', text: 'YES', value: 'true'}, {key: 'NO', text: 'NO', value: 'false'}],
    placeholder: 'Yes?',
    title: 'Are you interested in giving a short (<5 min) lightning talk on a topic of your choice ?',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 16,
    fieldType: 'select',
    inputType: 'text',
    id: 'isPrivate',
    required: true,
    options: [{key: 'YES', text: 'YES', value: 'true'}, {key: 'NO', text: 'NO', value: 'false'}],
    placeholder: 'Yes?',
    title: 'We\'d love to connect you to awesome opportuniities at sponsoring companies. Is it okay if we share your information with our sponsors?',
    validate: (input) => {
      return true;
    }
  },
  {
    width: 16,
    fieldType: 'input',
    inputType: 'text',
    id: 'otherOpenSource',
    required: false,
    placeholder: 'Contract info/Github username',
    title: 'Are there any Open Source contributors you would like to see at HackIllinois? (Optional)',
    validate: (input) => {
      return true;
    }
  },
]

export {personal_fields, professional_fields}
