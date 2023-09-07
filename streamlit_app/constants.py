import pickle

# TEXTBOOK_QUESTIONS = ["In a chemistry class, you may have learned that the strength of an acid is determined by the stability of its conjugate base. Said another way, the $pK_a$ of an acid is lower---favoring dissociation into H$^+$ and A$^-$ if A$^-$ is relatively stable as an anion. Using the concept of electrostatic potential energy, how can this conception of the strength of acids be used to rationalize the increase in acidity as one goes down the halides from top to bottom: F, Cl, Br, I?", "Which part of the van der Waals interaction depends on temperature? Why?", "The Boltzmann constant times the temperature, $kT$, is often used as a measure of energy, called the \textbf{thermal energy}. The strength of a van der Waals bond of two small uncharged molecules is around 1 $kT$, for water---which exhibits strong hydrogen bonding---the strength of the interaction is around 10 $kT$. What is the value of the thermal energy at room temperature (298 K)? What is the approximate (order of magnitude) value of the strength of an ionic bond as in NaCl?", "Explain why butane (C$_4$H$_{10}$) is a gas at room temperature while octadecane (C$_{18}$H$_{38}$) is a solid.", "The situation depicted at the bottom of Figure \ref{fig:highlowpotential} seems to suggest that particles always spread out in a closed system due to entropy. That is, physical systems tend toward configurations which maximize the number of statistical microstates available. In light of this tendency, why do oil and water separate in salad dressing? What other forces do we have to consider?", "Imagine two particles that interact with a negative potential energy at a given distance of separation, $r$. Is the force attractive or repulsive? What information do you need about the interaction to know for sure?", "Recall the van der Waals equation of state from chemistry: it is the equation that makes corrections to the idea gas equation for attractive forces ($a$ parameter) and excluded volume ($b$ parameter). In light of what you learned in this chapter, how would you expect the $a$ and $b$ parameters of the Van der Waals equation of state to differ between iodine (I\textsubscript{2}) and chlorine (Cl\textsubscript{2}) gas?"]
# TEXTBOOK_ANSWERS = ["You may have heard from your high school chemistry class that the strength of an acid increases in relation to the stability of its conjugate base. This phenomenon can also be understood from the standpoint of electrostatics dis- cussed in this chapter. For example, one of the ways to decrease the potential energy of a charge is to delocalize the charge over a larger volume or surface area. The way to think about this decreased potential energy, or rather, in- crease in stability, is by mentally breaking up the whole charge into lots of little infinitesimally small charges. These charges are then forced to occupy the same space. As the space gets bigger, the repulsion of the little charges experienced by each other decreases. So, looking at the halides—the group to the far right of the periodic table which goes from fluorine to iodine—the atomic and ionic radius gets bigger. As it gets bigger, the surface area increases with the square of the radius (and the volume increases with the cube of the radius) and thus the charge is delocalized over a larger structure. This reduced electrostatic self-repulsion of the negative charge of the conjugate base render it more electrostatically stable. This increased stability makes it easier for the proton and the conjugate base to disassociate, leading to a lower pK_a, and thus a stronger acid.", "Of the three components of the van der Waals interaction, only the dipole- dipole (a.k.a. Keesom) interaction depends on temperature. Notice in equation (2.4), them temperature appears in the denominator. Thus, an increase in temperature reduces the energy and force of the interaction. The reason for this inverse dependence on temperature has to do with the mental model we use to conceive of the dipole-dipole force. In the derivation of (2.4)— shown in Israelachvili in the Further Reading for the chapter—we assume that the dipolar molecules can rotate freely; they are not locked in place. Nevertheless, the average orientation of the positive end of one dipole tends to be pointed in the direction of the negative end of the adjacent dipolar molecule. As the temperature increases, the dipoles rotate more freely because there is more energy available to send the dipoles into orientations that are out of alignment with each other. That is, more of the angles between the dipoles end up being out of alignment with the electrostatically most favorable mutual configuration. At sufficiently high temperatures, there is no electrostatic effect at all and the dipoles rotate so freely that they are equally likely to have their ends pointed away from each other as they are to be pointed toward each other. So, T appears in the denominator, because as it increases, the overall favorability of the potential energy is reduced.", "The thermal energy, that is, the Boltzmann constant times the temperature at 298 K, kT , is about 4 × 10−21 J. This energy is equivalent to about 2.5 kJ mol−1, or 26 meV (millielectron volts). It is worth having a sense of these numbers so that if you are in a meeting and somebody gives you the strength of an interaction as being 1 kJ mol−1, you would know that it is not a very strong interaction. If the the potential energy—the “pair potential”—between two molecules is around 10 kT , then that material probably forms a condensed phase, meaning a solid or liquid, at room temperature. A good example is water, whose pair potential is very close to 10 kT. In contrast, a weak van der Waals interaction like the pair potential between two methane molecules is around 1 kT , which is not strong enough to form a liquid at room temperature. A very strong bond, like a covalent bond or an ionic bond, such as sodium chloride, NaCl, is around 100 kT.", "For linear hydrocarbons such as butane and octadecane, you get about 1.5 kT per CH2 (methylene) unit. (Note that butane in the reservoir of a cigarette lighter is a liquid, but only because it is pressurized. As soon as it escapes, it is a gas.) Thus, for butane, you have about 6 kT worth of pair potential, which does not quite reach the threshold of 10 kT that we use to determine if the molecule will condense into a liquid, as per the solution to the previous problem. However, for octadecane, the intermolecular pair potential due to van der Waals forces, primarily London dispersion interactions, is so strong that you easily form a solid, as there are two CH3 (methyl) units and sixteen CH2 units, which collectively produce quite a force!", "The driving force for any chemical interaction is given by the Gibbs free energy, \delta H = \delta G − T \delta S. Thus, there is a competition in any process between the two criteria of enthalpy (G) and entropy (S). Enthalpy has to do with the formation of bonds. It contributes to the favorability of a process when it decreases from the initial state to the final state. On the other hand, entropy has to do with the number of statistical microstates available. It contributes to the favorability of a process when it increases from the initial state to the final state. (The \delta s in the Gibbs free energy equation means that we have to consider whether the quantity increased or decreased after the reaction or process in question.) In any process where we are considering the dissolution of one component into another, the entropy of the mixed estate is usually greater than entropy of the separated state, thus entropy favors dissolution for most systems of solutes and solvents. (It is important to consider the effect of any dissolution or self-assembly process on not just the solute, but on the solvent as well!) However, mixing sometimes requires unlike molecules to interact with each other. You’ve heard the phrase “like dissolves like,” which is a good rule of thumb, but it leads one to a somewhat incorrect view of the mechanism. For example, it may in fact be true that two unlike molecules have a favorable energy (negative enthalpy) of interaction. However, all that is required is for the self interaction of two like molecules to be stronger than the interaction between two unlike molecules. If the difference between these two energies is sufficient to overwhelm the driving force for mixing which is always provided by entropy, then the two components will separate, just like oil and water.", "From the information given, it is impossible to know whether the force will be attractive or repulsive. What is important is not the sign of the energy at any particular configuration, but what happens to the energy—whether it increases or decreases—as the geometry changes. Formally, the force is equal to the negative rate of change of the potential energy with respect to some geometric change, commonly interparticle separation, r, or the intersurface separation, D (see Chapter 3). If the energy increases as the particles get closer, then convince yourself based on equation (2.3) that the force is positive and therefore repulsive. So, we are missing information. We do not need to know the absolute value of the energy or the sign of the energy so much as what happens to that energy—does it increase or decrease?—as the particles get closer together or further part. The force has a physical manifestation; the energy does not.", "In the van der Waals equation of state, which is a correction to the ideal gas law that accounts for the interatomic or intermolecular forces, a, and the excluded volume, b, the parameter a is an experimental measure of the van der Waals interaction potential and the parameter b is simply a measure of the physical volume of the particle. A greater attractive force between particles would tend to reduce the measured pressure at the sidewalls of a sample of a van der Waals gas. The reason being that because there are by definition no molecules of gas beyond the walls, the molecules near the edges experience a net inward force from those closer to the center. And the pressure, after all, is measured at the walls of the container, not at the interior. That is the effect of a. The effect of b, on the other hand, is different. The b parameter represents the total volume excluded by the presence of the molecules or atoms of gas. A greater excluded volume reduces the actual volume available in the con- tainer for the other molecules to move around. The reduction in volume is exactly equivalent to putting the molecules in a smaller box, except that the space is “removed” throughout the volume of the box, just like the air bubbles distributed throughout the bulk of a block of Swiss cheese (at least what we call “Swiss cheese” in North America) reduces the actual volume of the cheese part of the cheese. Because the pressure is increased. For chlorine, we have a relatively small diatomic gas, so its a parameter and b parameter would be decreased compared to iodine, which is a much larger diatomic gas. The effect on van der Waals force is quite large, in that with many more protons and electrons, you have a much more polarizable species, and thus the overall van der Waals force will be higher because of the larger London dispersion interaction."]

TEXTBOOK_QUESTIONS = []
TEXTBOOK_ANSWERS = []

with open("docs/review_questions_50.pickle", 'rb') as file:
    dataset = pickle.load(file)

    for sample in dataset:
        TEXTBOOK_QUESTIONS.append(sample['review']['question'])
        TEXTBOOK_ANSWERS.append(sample['review']['answer'])


WELCOME_MESSAGE = """
Welcome to the review of Chapter 2 (Forces between Atoms, Molecules, Particles, and Surfaces)  with the AI-Tutor developed for Nano 11! 
Here's how it works:

1. The AI-tutor will pose a review question. The AI-tutor always poses a review question at the start of the conversation.
2. Do your best to answer the question. If you need clarification for the question, feel free to ask. You can do so by saying something like "I don't understand this  part (specify the part) of the question".
3. If you're unsure about an answer or need assistance, just let the AI-tutor know, and it will help you out. You can do so with something like "I need help" or "I don't understand"
4. You can always move on to the next question by pressing the skip-button in the left hand side or saying something like "I want to go to the next question."
5. When you choose to move onto the next question, the AI-Tutor will pose the next question. When you answer, messages related to the previous question will disappear.
6. If you would like to end the session, say "I am done for the day." or "Goodbye".

Important Note: If the status in the top right corner says 'Running,' the AI-Tutor is processing your request. Kindly refrain from entering another message during this time.

**Disclaimer:** This is an experimental application, and the AI-Tutor may occasionally provide incorrect responses. If you have any questions, please consult your instructor or teaching assistant. All responses will be recorded for development purposes.
"""

EVALUATOR_PROMPT = """You are a grader for an undergraduate introduction nanoengineering course. \
You will see an exam question, the student's answer to the question and the correct answer. \
The correct answer would be long and contains too many details,\
The student's answer would be shorter and may contain some errors including major conceptual error, \
omission and forgetting of important facts, any calculation error. Using the correct answer as a guide to identify \
major errors in the student's answer, based on the setting of the question. Note, you should only report
important errors and you should not care about minor discrepancies. You should not care about
whether the student mentions specific formulas. Use your best judgement to decide
what issues are important and what are not, be fair but also be lenient. 

Question: {question}
Correct Answer: {correct_answer}
Student's Answer: {student_answer}
"""

PROCTOR_PROMPT = """You are an AI assistant proctor for undergraduate Nano-Engineering course helping students to review for final exam. 
Your job is to make sure students answer questions and clarify any doubts the student may have regarding how to interact with you. 
You are never allowed to reveal the answer to the question.

If the student provides an answer or gives up on the question, simply call the teacher AI assistant. Never discuss answers with the students.
NEVER TELL THE STUDENT ABOUT THE TEACHER.

To call the teacher AI assistant use the function `get_teacher()`

If the student is done studying and says goodbye, simply call the `exit()` function.

Question: {question}
"""

TEACHER_PROMPT2 = """
You are a tutor for an undergraduate nano-engineering course helping students with questions. You are provided with the question, the instructor's answer, student's response and grader's feedback.
For each error noted in the grader's feedback, state what the student did wrong (but do not explain how to correct the error) and offer a socratic question (if possible) to help student think about their mistake. 
If student response to the socratic question is incorrect, simply explain how to correct the student's mistake and why they went wrong. 
Go on to the next point in the grader's feedback.

If you are done reviewing the entire feedback, ask the student to write the answer again. Review the student's answer with the correct answer and state if there are any errors.  

If the student is satisfied or wants to go to the new review question, simply call the manager using the function `get_manager()`
If the student is done studying and says goodbye, simply call the `exit()` function.

Question: {question}
Correct Answer: {correct_answer}
Student's Answer: {student_answer}
Grader's Feedback: {grader_feedback}
"""

TEACHER_PROMPT = """
[Student Configuration]
    🎯Depth: Undergraduate (Freshman)
    🧠Learning-Style: Active
    🗣️Communication-Style: Socratic
    🌟Tone-Style: Encouraging
    🔎Reasoning-Framework: Causal
    😀Emojis: Enabled (Default)
    🌐Language: English (Default)
    📕Course: Introduction to Nano-Engineering

[Overall Rules to follow]
    1. Use emojis to make the content engaging
    2. Use bolded text to emphasize important points
    3. Do not compress your responses
    4. You can talk in any language

[Personality]
    You are an engaging and fun UCSD tutor Triton who aims to help the students understand their mistakes on review questions they are learning for NANO-11 final. You try your best to follow the student's configuration.

If the student is satisfied or wants to go to the new review question, simply call `get_proctor()`
If the student is done studying and says goodbye, simply call `exit()`

[Review Question]
	{question}
[Correct Answer]
	{correct_answer}
[Student's Answer]
	{student_answer}
[Grader Feedback]
	{grader_feedback}


Executables are not functions for you to call. They are procedures for you to execute. DO NOT CALL EXECUTABLES AS FUNCTIONS, FOR EXAMPLE "Lesson.Question" is INVALID.

[Executagbles]
    [say, Args: text]
        [BEGIN]
            You must strictly say and only say word-by-word <text> while filling out the <...> with the appropriate information.
        [END]

    [sep]
        [BEGIN]
            say ---
        [END]

    [Lesson]
    	[BEGIN]
    		[LOOP while teaching]
    			[LOOP while errors not clarified in student's answer or student has questions or doesn't answer all the teacher's questions]
    				teach the student about each error remebering your communication style.
	    			[IF tutor asks a question to the student]
	                    <stop your response>
	                    <wait for student response>

	                [ELSE IF student asks a question]
	                    <execute <Question> function>
	                [ENDIF]

	           		[IF tutor has clarified all student errors]
	           			<BREAK error Loop>

	    	Ask if the student wants to continue to next question or stop

	    	[IF student wants to continue]
	    		call the manager using the function `get_manager()`
	    	[ELSE]
	    		call exit using the function `exit()`

		[Question]
        [BEGIN]
            say **Question**: <...>
            <sep>
            say **Answer**: <...>
        [END]
"""