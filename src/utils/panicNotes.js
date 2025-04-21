const panicNotes = {
    1: `History of Present Illness:
Reason for Visit: Routine 26-month well-child visit. No specific concerns reported.

Health History: Mother had preeclampsia during pregnancy. Patient had jaundice after birth, treated with phototherapy for five days. Recent cold with cough and runny nose, now resolved. History of ear infection at 10 months.

Physical Development History: Running, climbing, and going up and down stairs while holding on. Good appetite, eats a variety of foods including fruits, yogurt, and pasta. Vegetables are challenging.

Mental Development History: Says many words, combines two to three words. Follows two-step instructions. Plays near other children, learning to share.

Prenatal, Birth, and Neonatal History: Born three weeks early due to maternal preeclampsia. Jaundice after birth requiring phototherapy for five days.

Review of Systems: No acute symptoms reported.

Physical Examination:
Temperature 98.6°F, Heart rate 100 bpm, Respiratory rate 24, Blood pressure 95/55 mmHg
Vision screening normal
Ears: Normal appearance
Lungs: Clear
Teeth: No visible cavities
Overall physical exam appropriate for age

Growth and Nutrition Assessment: Weight, height, and BMI percentile not provided. Eating a variety of foods, including fruits, yogurt, and pasta. Vegetables remain challenging.

Preventive Care: Immunizations and Screening Tests: Due for second Hepatitis A vaccine and annual flu vaccine. Administered during visit.

Health Education/Anticipatory Guidance: Discussed importance of varied diet including vegetables, limiting screen time, reading together, and maintaining safety measures.

Oral Health: Brushing twice daily, sometimes difficult. Almost all teeth present. No dental visit yet. Recommended first dental visit and provided referral to pediatric dentist. Advised on proper toothbrushing technique and use of small amount of fluoride toothpaste.

Psychosocial and Family Health: No concerns noted.

School Readiness, Early Learning: Not applicable at 26 months.

Lifestyle Counseling: Encouraged continued varied diet and physical activity.

Results:
No laboratory tests indicated or performed during this visit.

Assessment & Plan:
Assessment / Impression: Healthy 26-month-old male with appropriate development. Up-to-date on immunizations after today's visit.

Plan:
1. Administered second Hepatitis A vaccine and annual flu vaccine
2. Continue varied diet, encourage vegetable intake
3. Maintain regular physical activity and limit screen time
4. Schedule first dental visit with pediatric dentist (referral provided)
5. Continue reading together and engaging in activities to support language development
6. Monitor for any signs of asthma or allergies given family history
7. Return for next well-child visit at 30 months or sooner if concerns arise

Patient and Caregiver Instructions: Continue with current feeding practices, emphasizing variety. Brush teeth twice daily with small amount of fluoride toothpaste. Maintain safety measures at home and during outdoor activities. Continue supporting language development through reading and conversation.

Patient Education Materials: Provided referral for pediatric dentist and age-appropriate developmental milestone information.

Attestation:
I have reviewed the documentation and agree with the content as written.

flowsheet:
{
  "patientAgeMonths": 26,
  "vitals": {
    "temperatureF": 98.6,
    "heartRateBpm": 100,
    "respiratoryRate": 24,
    "bloodPressure": "95/55"
  },
  "physicalDevelopment": {
    "running": "yes",
    "climbing": "yes",
    "appetite": "good"
  },
  "languageDevelopment": {
    "saysMultipleWords": "yes",
    "combinesTwoToThreeWords": "yes",
    "followsTwoStepInstructions": "yes"
  },
  "socialDevelopment": {
    "playsNearOtherChildren": "yes",
    "learningToShare": "yes"
  },
  "immunizationsGivenToday": [
    "Hepatitis A",
    "Influenza"
  ],
  "visionScreening": "Normal",
  "oralHealth": {
    "brushingFrequency": "twice daily",
    "visibleCavities": "no"
  },
  "familyHistory": {
    "asthma": "father",
    "seasonalAllergies": "father",
    "diabetes": "family history",
    "cancer": "na"
  }
}

orders_list:
{
  "orders": [
    "Hepatitis A vaccine",
    "Influenza vaccine"
  ]
}`,
    2: `History of Present Illness:
Mr. Blackwell presents with worsening shortness of breath over the last couple of weeks, experiencing dyspnea with minimal exertion such as walking across a room or climbing stairs. He reports a dry cough that started a few days ago. His rescue inhaler has become less effective in managing his symptoms. Additionally, he notes elevated blood sugar levels, particularly in the mornings, ranging from 180s to over 200. Mr. Blackwell also mentions a small sore on his right heel that has been present for about three weeks and is not healing. He confirms some chest tightness and a wheezy feeling but denies fever. The heel sore is described as having minimal clear drainage at times and is not particularly painful. Mr. Blackwell has a history of Type 2 Diabetes for approximately 15 years, with associated neuropathy in his feet, and COPD. He reports an allergy to Penicillin, which causes a rash. He is a former smoker, having quit over 10 years ago after smoking for about 30 years.

Physical Examination:
Vital Signs: Blood pressure 146/86, pulse 80, oxygen saturation 94% on room air, temperature 98.4°F
General: Increased respiratory effort noted with movement
Respiratory: Fair air movement, wheezing throughout, especially on expiration
Cardiovascular: Regular heart sounds
Skin: Right heel with 1.5 cm shallow ulcer, pink base, clean edges, minimal drainage
Neurological: Reduced sensation to light touch on feet, consistent with neuropathy

Results:
Blood glucose: 188 mg/dL
HbA1c: 8.4%
Creatinine: 1.3 mg/dL
eGFR: 58 mL/min/1.73m²
Spirometry: Moderate obstruction

Assessment & Plan:
1. COPD Exacerbation
   - Prescribe Prednisone 40mg daily for 5 days
   - Increase Albuterol inhaler use: two puffs every 4-6 hours as needed
   - Ensure patient has Tiotropium maintenance inhaler, one puff daily
   - Follow-up in 2 weeks to reassess breathing

2. Poorly Controlled Type 2 Diabetes
   - Add Empagliflozin 10mg daily to current Metformin regimen
   - Continue Metformin 1000mg twice daily
   - Instruct patient to monitor blood glucose daily, preferably fasting
   - Follow-up in 2 weeks to reassess blood sugar control

3. Diabetic Foot Ulcer (Right Heel)
   - Clean daily with saline and apply hydrocolloid dressing
   - Advise patient to wear supportive shoes and offload pressure from the heel
   - Refer to Podiatry for wound management and footwear assessment
   - Follow-up in 2 weeks to reassess ulcer healing

4. Stage 3a Chronic Kidney Disease
   - Continue current management with Lisinopril 10mg daily
   - Order Urine Albumin/Creatinine Ratio test

5. Preventive Care
   - Administer Pneumococcal vaccine (PCV20) today
   - Order COVID booster
   - Refer to Ophthalmology for annual diabetic eye exam
   - Refer to Gastroenterology for colonoscopy screening
   - Remind patient to get flu shot in the fall

6. Hypertension
   - Continue Lisinopril 10mg daily
   - Reassess blood pressure at 2-week follow-up

Patient Education:
- Instruct on proper inhaler technique and increased usage during COPD exacerbation
- Educate on importance of blood glucose monitoring and foot care
- Advise to seek immediate medical attention if breathing worsens, fever develops, or foot ulcer shows signs of infection (increased redness, swelling, or pus)

Follow-up:
Schedule follow-up appointment in 2 weeks to reassess COPD symptoms, blood pressure, blood glucose control, and foot ulcer healing. Ensure patient schedules and attends specialist appointments (Podiatry, Ophthalmology, Gastroenterology).

Attestation:
I have reviewed the documentation and agree with the content as written.

orders_list:
{
  "orders": [
    "Prednisone 40mg",
    "Empagliflozin 10mg",
    "PCV20 vaccine"
  ]
}

problems_list:
{
  "problems": [
    "COPD Exacerbation",
    "Poorly Controlled Type 2 Diabetes",
    "Diabetic Foot Ulcer",
    "Stage 3a Chronic Kidney Disease",
    "Hypertension"
  ]
}

education_instructions:
Increase Albuterol inhaler use to two puffs every 4-6 hours as needed. Use Tiotropium maintenance inhaler one puff daily. Monitor blood glucose daily, preferably fasting. Clean foot ulcer daily with saline and apply hydrocolloid dressing. Wear supportive shoes and offload pressure from the right heel. Seek immediate medical attention if breathing worsens, fever develops, or foot ulcer shows signs of infection (increased redness, swelling, or pus). Attend scheduled follow-up and specialist appointments.`,
    3: `History of Present Illness:
Patient presents with complaints of hazy vision, especially at a distance, for the past three months. The right eye is more affected than the left. Symptoms are most noticeable in the evening and after computer use at work. Patient rates severity as 6 out of 10, affecting daily life. Associated symptoms include mild headaches and eye strain after focusing. Patient also reports dry and burning eyes with a sensation of something in them. Artificial tears provide temporary relief. 

Patient is an accountant with extensive computer use. Last eye exam was two years ago with a slight prescription change. Patient has been nearsighted since childhood.

Past Medical History: High blood pressure since 2018, high cholesterol since 2019, Type 2 diabetes since 2015. Last A1c was 6.7% in January.

Family History: Maternal grandmother had glaucoma, father has macular degeneration. Both parents have Type 2 diabetes.

Social History:
Marital Status: Married
Number of children: Two
Occupation: Accountant
Tobacco Use: Former smoker, quit 8 years ago
Packs/Day: 1 pack
Years: 15 years
Alcohol Use: Social drinker, 1-2 glasses of wine on weekends
Drug Use: No recreational drugs

Diabetes History: YES
Type: 2
Year of diagnosis: 2015
Most recent A1c: 6.7% (January)
Current treatment: Metformin 1000mg twice daily

Allergies: Penicillin (hives), sulfa drugs (rash)

Current outpatient prescriptions:
1. Metformin 1000mg twice daily
2. Lisinopril 10mg daily
3. Atorvastatin 20mg at bedtime
4. Systane Ultra eye drops as needed

Physical Examination:
Visual Acuity:
Without correction: OD 20/100, OS 20/80
With correction: OD 20/40, OS 20/30
Near vision with correction: OD J3, OS J2

Pupils: Equal and reactive, no APD
Extraocular Movements: Full
Confrontation Visual Fields: Full to finger counting OU

Intraocular Pressure: OD 16 mmHg, OS 15 mmHg

Slit-Lamp Examination:
Lids: Normal, mild meibomian gland dysfunction
Conjunctiva/Sclera: Small pinguecula nasally OU
Cornea: Clear OU
Anterior Chamber: Deep and quiet OU
Iris: Normal OU
Lens: OD 2+ nuclear sclerotic and 1+ posterior subcapsular cataracts, OS 1+ nuclear sclerosis

Tear Film Evaluation:
Tear break-up time: OD 4 seconds, OS 5 seconds
Schirmer test: OD 5mm, OS 6mm after 5 minutes
Punctate epithelial erosions inferiorly OU

Fundus Examination:
Optic Nerves: Healthy with 0.3 cup-to-disc ratio OU
Macula: Intact OU
Vessels: Normal OU
Peripheral Retina: Intact OU

Tests Ordered: Tear break-up time, Schirmer test

Orders Placed This Encounter: Punctal plugs insertion procedure

Results:
Tear break-up time: OD 4 seconds, OS 5 seconds (reduced, normal >10 seconds)
Schirmer test: OD 5mm, OS 6mm after 5 minutes (reduced, normal >10mm)

Assessment & Plan:
1. Dry Eye Syndrome (H04.123, Bilateral)
   - Punctal plugs inserted in lower puncta OU
   - Continue preservative-free artificial tears, reduce to twice daily or as needed
   - Warm compresses with gentle massage daily for meibomian gland dysfunction
   - Follow-up in 6 weeks to check plugs
   - Patient educated on punctal plugs, potential side effects, and proper eye care

2. Cataracts (H25.13 Right eye, H25.11 Left eye)
   - Monitor progression
   - Continue good diabetes management
   - Patient educated on cataract development and potential future need for surgery

3. Refractive Error (H52.10 Myopia, Bilateral)
   - New progressive glasses prescription to be provided
   - Patient educated on the 20-20-20 rule for computer use: every 20 minutes, look at something 20 feet away for 20 seconds

4. Type 2 Diabetes Mellitus (E11.9)
   - Continue current management with Metformin
   - Emphasize importance of glycemic control for eye health
   - Annual comprehensive dilated eye exam recommended

Follow-up: Return in 6 weeks to check punctal plugs, then comprehensive exam in 12 months or sooner if vision changes occur.

Attestation:
I have reviewed the documentation and agree with the content as written.

education_instructions:
- Use preservative-free artificial tears twice daily or as needed
- Perform warm compresses with gentle massage daily for meibomian gland dysfunction
- Follow the 20-20-20 rule for computer use: every 20 minutes, look at something 20 feet away for 20 seconds
- Avoid rubbing eyes vigorously
- Call the office if a punctal plug falls out
- Continue managing diabetes well
- Return in 6 weeks to check punctal plugs
- Schedule comprehensive eye exam in 12 months or sooner if vision changes occur

procedure_note:
Pre-Op Diagnosis: Dry Eye Syndrome (H04.123, Bilateral)
Post-Op Diagnosis: Same
Procedure: Insertion of punctal plugs, bilateral lower puncta
Performing Physician: [Ophthalmologist's name]
Procedure performed: After obtaining informed consent, topical anesthetic drops were administered to both eyes. The lower punctal areas were cleaned and prepped. Under microscopic visualization, punctal plugs were inserted into the lower puncta of both eyes. The plugs were confirmed to be well-positioned. The patient tolerated the procedure well with no immediate complications.`,
    4: `History of Present Illness:
Patient presents for evaluation of a changing mole on the right arm, facial redness, and dry, itchy patches on elbows. The mole on the right arm has gotten darker and bigger over the last three months. It was light brown before and is now much darker with uneven coloring. The patient noticed the changes while applying sunscreen. No itching, pain, bleeding, or ulceration of the mole is reported.

The facial redness across cheeks and forehead has been present for about a year, accompanied by tiny bumps that worsen with spicy food and wine consumption. The patient rates the severity as 6 out of 10 on bad days. Hydrocortisone cream was tried but provided minimal relief.

Dry, itchy patches on the elbows have worsened over six months, presenting with silvery scales that sometimes bleed when scratched. Cetaphil lotion helps with dryness but does not resolve the condition.

Past Dermatological History: No personal history of skin cancer.

Family History: Father had melanoma at age 58 on his back, Stage II. Mother had a similar condition to the patient's elbow patches on her scalp, specific diagnosis unknown.

Social History:
Occupation: High school English teacher
Hobbies: Coaches soccer
Sun Exposure History: Had blistering sunburns as a child in Florida. Moderate weekend sun exposure, especially during soccer season. Inconsistent use of sunscreen. Grew up in Florida until age 15, then moved to current location. No tanning bed use.

Review of Systems:
General: Patient reports feeling generally well, recently ran a 5K.
Skin: As noted in HPI.
All other systems reviewed and negative.

Physical Examination:
Skin Examination:
- Right arm: Mole measures 6mm, brown with blue-black areas, asymmetry, and irregular borders.
- Face: Diffuse redness across cheeks and forehead with telangiectasias and scattered inflammatory papules and pustules.
- Elbows: Well-defined red plaques with thick silvery scale and Auspitz sign when scales are removed.
- Trunk and arms: Scattered benign seborrheic keratoses.
- Nail beds: Healthy appearance, no pitting.

Lymph Node Examination: No lymphadenopathy in cervical, supraclavicular, axillary, or inguinal regions.

Dermoscopic Examination: 
Mole on right arm shows asymmetric pigmentation with peripheral irregular network, blue-white veil in one section, and several atypical dots. Area showing regression and apparent negative pigment network.

Wood's Lamp Examination:
No coral-red fluorescence on facial redness, suggesting absence of significant Demodex involvement.

Tests Performed:
- KOH preparation of elbow scales: Negative for fungal elements.

Orders Placed This Encounter:
- Shave biopsy of suspicious mole on right arm

Results:
Dermoscopic examination of the mole on the right arm revealed features concerning for melanoma, including asymmetric pigmentation, peripheral irregular network, blue-white veil, atypical dots, regression, and apparent negative pigment network.

Wood's lamp examination of facial redness showed no coral-red fluorescence, supporting the diagnosis of rosacea without significant follicular involvement.

KOH preparation of elbow scales was negative for fungal elements, consistent with the clinical impression of psoriasis rather than fungal infection.

Assessment & Plan:
1. Suspicious melanocytic lesion of right arm (ICD-10: D48.5)
   - Performed shave biopsy under local anesthesia with lidocaine and epinephrine
   - Hemostasis achieved with aluminum chloride
   - Specimen sent for histopathological examination
   - Results expected in 1-2 weeks
   - Follow up in 2 weeks for biopsy results
   - Patient education: Explained ABCDE criteria for monitoring other moles
   - Recommend daily use of SPF 50 broad-spectrum sunscreen

2. Papulopustular rosacea, moderate (ICD-10: L71.8)
   - Prescribed Metronidazole 1% cream, apply twice daily for 12 weeks
   - Prescribed Doxycycline 40mg oral, take once daily for 8 weeks
   - Patient education: Avoid triggers such as hot beverages, alcohol, and spicy foods
   - Recommend use of gentle skincare products like Cetaphil or CeraVe
   - Advise use of zinc-based sunscreen daily
   - Follow up in 8 weeks to assess treatment response

3. Plaque psoriasis of elbows (ICD-10: L40.0)
   - Prescribed Triamcinolone 0.1% ointment, apply twice daily for 2 weeks, then once daily for 2 weeks
   - Recommend moisturizing at least twice daily with CeraVe or Vanicream
   - Advise taking lukewarm baths with colloidal oatmeal and avoiding scratching
   - Discuss potential for phototherapy or systemic options if needed at follow-up

4. Favre-Racouchot syndrome and solar elastosis (ICD-10: L57.8)
   - Patient education: Explained signs of sun damage
   - Recommend daily use of SPF 30+ sunscreen, protective clothing, and seeking shade between 10am-4pm
   - Advise regular self-skin checks

5. Family history of melanoma (ICD-10: Z80.8)
   - Recommend annual full-body skin examinations

Follow-up: Return to clinic in 2 weeks for biopsy results, then in 8 weeks to assess rosacea treatment response. Schedule annual full-body skin examinations.

Patient Education: Provided wound care instructions for biopsy site. Explained the importance of sun protection and regular skin self-examinations. Discussed the chronic nature of rosacea and psoriasis, emphasizing the importance of consistent treatment and trigger avoidance.

Attestation:
I have reviewed the documentation and agree with the content as written.

orders_list:
{
  "orders": [
    "Metronidazole 1% cream",
    "Doxycycline 40mg",
    "Triamcinolone 0.1% ointment"
  ]
}

procedure_note:
Pre-Op Diagnosis: Suspicious melanocytic lesion of right arm
Post-Op Diagnosis: Suspicious melanocytic lesion of right arm
Procedure: Shave biopsy
Performing Physician: Dr. Commure

Procedure performed: After obtaining informed consent, the area surrounding the skin lesion was prepared and draped in the usual sterile manner. Local anesthesia was achieved using lidocaine with epinephrine. The lesion was removed via shave biopsy technique. Hemostasis was assured using aluminum chloride. The patient tolerated the procedure well. Closure: None required. The patient was provided with wound care instructions and education regarding the biopsy process and follow-up plan.`,
    5: `History of Present Illness:
Mr. Chen presents with a severe cough that started three days ago, accompanied by subjective fever and occasional sneezing. He reports significant shortness of breath, describing it as being unable to catch his breath, which worsens with coughing fits. He confirms producing yellow sputum. No sharp chest pain is reported, but he feels tightness when coughing. He also reports generalized fatigue. He denies sore throat or significant nasal congestion.

Physical Examination:
General: Moderate respiratory distress observed, using some accessory muscles.
HEENT: Moist mucous membranes, otherwise normal.
Neck: Supple.
Lungs: Coarse rhonchi and scattered crackles, more prominent in the right lower lobe. Mild end-expiratory wheezes bilaterally.
Cardiovascular: Tachycardic but regular.
Skin: Warm, diaphoretic.

Results:
Vitals: Temperature 101.8°F, Heart Rate 118, Respiratory Rate 28, Blood Pressure 128/78, Oxygen Saturation 92% on room air.

Assessment & Plan:
1. Acute Bronchitis with Hypoxia
   - Differential diagnosis includes Pneumonia
   - Plan:
     - IV hydration: Normal Saline 1000 mL IV bolus x1
     - Bronchodilator therapy: Albuterol 2.5mg/3mL Nebulizer treatment x1 STAT
     - Cough suppression: Benzonatate 100mg capsules, 1 cap TID PRN cough, #30
     - Reassess post-treatment
     - Consider Chest X-ray if no significant improvement
   - Patient Education:
     - Rest at home
     - Drink plenty of fluids
     - Take cough pearls only as needed
   - Return Precautions:
     - Return to Urgent Care or go to the Emergency Room immediately if:
       - Breathing worsens
       - Fever stays high (over 102°F despite Tylenol/Motrin)
       - Feels dizzy or confused
       - Starts coughing up blood

Attestation:
I have reviewed the documentation and agree with the content as written.

orders_list:
{
  "orders": [
    "Normal Saline 1000 mL",
    "Albuterol 2.5mg/3mL",
    "Benzonatate 100mg"
  ]
}

education_instructions:
Rest at home. Drink plenty of fluids. Take cough pearls (Benzonatate) only as needed. Return to Urgent Care or go to the Emergency Room immediately if breathing worsens, fever stays high (over 102°F despite Tylenol/Motrin), feeling dizzy or confused, or coughing up blood occurs.`,
    6: `History of Present Illness:

Chief Complaint: Dizziness for about a week

Mr. Johnson, a retired high school math teacher, presents with complaints of dizziness for approximately one week. He experiences dizziness upon standing up or turning his head, with the room spinning for about 30 seconds. This occurs 3-4 times daily. He has not fallen but grabs furniture to steady himself. The dizziness is worse in the morning or if he skips breakfast. He denies associated nausea, headaches, or visual changes.

Past Medical History:
- Hypertension for 12 years
- Diabetes mellitus for 8 years
- Hearing loss for 5 years
- Hypercholesterolemia for 10 years
- Benign prostatic hyperplasia for 3 years
- Arthritis in hands for 4 years

Allergies:
- Penicillin (rash)
- Sulfa drugs (hives)

Social History:
- Lives alone in a single-story house in San Francisco
- Retired high school math teacher
- Widowed 4 years ago
- Two children who visit weekly
- Former smoker, quit 20 years ago (2 packs daily for 20 years)
- Alcohol: wine with dinner 2-3 times a week

Family History:
- Father died from myocardial infarction at age 82
- Mother died from stroke at age 78
- Brother has diabetes

MEDICATION RECONCILIATION:
1. Lisinopril 20 mg orally once daily (for hypertension, taking for 10 years)
2. Metformin 1000 mg orally twice daily with meals (for diabetes, sometimes forgets evening dose)
3. Atorvastatin (Lipitor) 40 mg orally at bedtime (for hypercholesterolemia, taking for 9 years)
4. Tamsulosin (Flomax) 0.4 mg orally at bedtime (for benign prostatic hyperplasia, taking for 3 years)
5. Aspirin 81 mg orally daily (taking for 7 years)
6. Amlodipine 5 mg orally once daily (for hypertension, taking for 5 years)
7. Acetaminophen (Tylenol) 1-2 tablets orally every 6 hours as needed for arthritis pain

Physical Examination:

Vital Signs: Blood pressure 148/88 mmHg, Heart rate 78 bpm

General: Alert and oriented, appears stated age

HEENT: Significant cerumen impaction noted bilaterally, which was removed during the visit. Hearing aids present.

Cardiovascular: Regular rate and rhythm, normal S1 and S2, no murmurs, rubs, or gallops

Respiratory: Lungs clear to auscultation bilaterally

Gastrointestinal: Abdomen soft and non-tender

Musculoskeletal: Arthritic changes noted in hands

Neurological: Dix-Hallpike maneuver performed, eliciting vertigo and characteristic nystagmus. Epley maneuver subsequently performed.

Skin: No rashes or lesions noted

Psychiatric: Normal affect and behavior

Results:

Laboratory Results:
- Blood glucose: 136 mg/dL
- HbA1c: 7.4%
- LDL cholesterol: 102 mg/dL
- Kidney function: Normal (specific values not provided)

Assessment & Plan:

1. BENIGN PAROXYSMAL POSITIONAL VERTIGO (BPPV):
Assessment: Patient presents with one-week history of positional vertigo. Diagnosis confirmed by positive Dix-Hallpike test with characteristic nystagmus.
- Perform Epley maneuver for canalith repositioning
- Prescribe meclizine (Antivert) for symptomatic relief, to be taken every 6 hours as needed
- Provide written instructions for home exercises to manage vertigo
- Follow up in 2 weeks to reassess symptoms

2. HYPERTENSION:
Assessment: Suboptimal control with current regimen. Office BP 148/88 mmHg.
- Increase lisinopril to 30 mg orally daily
- Continue amlodipine 5 mg daily
- Patient to monitor home blood pressure and bring log to next visit
- Follow up in 2 weeks to reassess blood pressure control

3. DIABETES MELLITUS TYPE 2:
Assessment: Suboptimal glycemic control with HbA1c 7.4% (target <7%).
- Continue metformin 1000 mg twice daily
- Emphasize importance of medication adherence, particularly evening dose
- Encourage regular meals and blood glucose monitoring
- Reassess glycemic control at next visit

4. HYPERCHOLESTEROLEMIA:
Assessment: LDL slightly above goal at 102 mg/dL (target <100 mg/dL).
- Continue atorvastatin 40 mg daily
- Reinforce dietary modifications and physical activity as tolerated
- Recheck lipid panel in 3 months

5. HEARING LOSS:
Assessment: Chronic hearing loss exacerbated by cerumen impaction.
- Cerumen removed during visit
- Refer to Audiology for hearing aid adjustment
- Follow up on audiology findings at next visit

6. BENIGN PROSTATIC HYPERPLASIA:
Assessment: Currently managed with tamsulosin.
- Continue tamsulosin 0.4 mg daily at bedtime
- Monitor for urinary symptoms

7. OSTEOARTHRITIS:
Assessment: Chronic hand arthritis, managed with as-needed acetaminophen.
- Continue current management with acetaminophen as needed
- Assess pain control at follow-up visits

Follow-up: Return to clinic in 2 weeks for reassessment of vertigo and blood pressure. Bring home blood pressure log.

Attestation:

I have reviewed the documentation and agree with the content as written.

education_instructions:

1. Vertigo management:
   - Provided written instructions for home exercises to manage vertigo
   - Explained proper use of meclizine (Antivert) for dizziness relief

2. Hypertension management:
   - Instructed on home blood pressure monitoring and maintaining a log
   - Emphasized importance of medication adherence, including the increased dose of lisinopril

3. Diabetes management:
   - Stressed the importance of taking evening metformin dose regularly
   - Encouraged regular meals and blood glucose monitoring

4. Medication education:
   - Clarified confusion between Lipitor and Lipidil
   - Reviewed all current medications, their purposes, and proper usage

5. Follow-up instructions:
   - Return in 2 weeks for vertigo and blood pressure reassessment
   - Bring home blood pressure log to next appointment

6. Audiology referral:
   - Explained the need for hearing aid adjustment by an audiologist

procedure_note:

Pre-Op Diagnosis: Benign Paroxysmal Positional Vertigo (BPPV)

Post-Op Diagnosis: Benign Paroxysmal Positional Vertigo (BPPV)

Procedure: Dix-Hallpike Test and Epley Maneuver

Performing Physician: Dr. Martinez

Procedure performed:
1. Dix-Hallpike Test: The patient was seated on the examination table and then quickly laid back with the head hanging about 20 degrees below horizontal and turned 45 degrees to the right. The eyes were observed for nystagmus. The maneuver was then repeated with the head turned 45 degrees to the left. Characteristic nystagmus was observed, confirming the diagnosis of BPPV.

2. Epley Maneuver: Following the positive Dix-Hallpike test, the Epley maneuver was performed. The patient's head was positioned 45 degrees towards the affected side. The patient was then quickly moved from a sitting to a supine position with the head extended over the edge of the table. After 30 seconds, the head was rotated 90 degrees to the opposite side. After another 30 seconds, the patient was rolled onto their side while maintaining head position. Finally, the patient was brought to a sitting position. The entire sequence was performed slowly and deliberately to reposition the otoconia in the semicircular canals.

The patient tolerated both procedures well, reporting expected dizziness during the maneuvers.

med_recon:

1. Lisinopril 20 mg orally once daily (for hypertension, taking for 10 years)
2. Metformin 1000 mg orally twice daily with meals (for diabetes, sometimes forgets evening dose)
3. Atorvastatin (Lipitor) 40 mg orally at bedtime (for hypercholesterolemia, taking for 9 years)
4. Tamsulosin (Flomax) 0.4 mg orally at bedtime (for benign prostatic hyperplasia, taking for 3 years)
5. Aspirin 81 mg orally daily (taking for 7 years)
6. Amlodipine 5 mg orally once daily (for hypertension, taking for 5 years)
7. Acetaminophen (Tylenol) 1-2 tablets orally every 6 hours as needed for arthritis pain

Patient reports sometimes forgetting the evening dose of metformin. No other adherence issues or side effects reported. Patient initially confused atorvastatin (Lipitor) with Lipidil, but this was clarified during the visit.`,
    7: `History of Present Illness:
Patient presents to the Emergency Room with chest pressure that started approximately two hours ago while sitting and watching TV. The pressure is located in the center of the chest and is described as feeling heavy, "like something's sitting on me." The pain radiates to the left arm and jaw. Patient rates the pain as 8/10 currently, noting it was initially 8-9/10 when it started and has not significantly improved. Associated symptoms include shortness of breath, sweating, and nausea without vomiting. The patient denies palpitations, dizziness, or lightheadedness. The onset was sudden and not associated with exertion. The patient took two sublingual nitroglycerin tablets borrowed from a friend prior to ambulance arrival, which provided minimal relief.

- Medical History: Hypertension, hyperlipidemia, Type 2 diabetes, previous RCA stent placement 5 years ago, appendectomy as a child
- Allergies: Penicillin (rash)
- Medications: 
  - Lisinopril (for hypertension)
  - Metformin (for diabetes)
  - Atorvastatin (for hyperlipidemia)
  - Aspirin 81mg daily
  - Clopidogrel (Plavix)
- Family History: Father had a heart attack at age 55, mother has hypertension and diabetes
- Social History: Current smoker (1 pack per day for 30 years), occasional alcohol use (beer), no illicit drug use

Physical Examination:
- General: Alert and oriented, appears uncomfortable
- Cardiovascular: Regular heart sounds, no murmurs noted
- Respiratory: Lungs clear to auscultation bilaterally
- Musculoskeletal: Normal strength in both hands
- Neurological: No numbness or tingling reported besides left arm pain

Results:
- EKG: Pending
- Troponin: Pending
- CBC: Pending
- Basic Metabolic Panel: Pending
- Coagulation Studies: Pending
- Lipid Panel: Pending
- Chest X-ray: Pending

Assessment & Plan:
Visit Diagnoses:
1. Acute chest pain, suspicious for acute coronary syndrome (R07.2)
2. History of coronary artery disease with previous stent placement (I25.10)
3. Essential hypertension (I10)
4. Type 2 diabetes mellitus (E11.9)
5. Hyperlipidemia (E78.5)
6. Nicotine dependence (F17.200)

Treatment Plan:
- Immediate chewable aspirin 324mg PO x1 (STAT)
- Continuous cardiac monitoring
- Oxygen therapy as needed to maintain SpO2 > 94%
- IV access established
- Nitroglycerin 0.4mg SL q5min PRN chest pain, if SBP > 100 mmHg (STAT)
- Morphine 2-4mg IV q2-4h PRN severe chest pain (STAT)
- EKG (STAT)
- Troponin level (STAT)
- CBC, BMP, coagulation studies, lipid panel (STAT)
- Chest X-ray (STAT)
- Cardiology consultation (STAT)
- Prepare for possible emergent cardiac catheterization pending initial test results

Procedure Note:
No procedures performed during this initial evaluation.

Attestation:
I have reviewed the documentation and agree with the content as written.

orders_list:
{
  "orders": [
    "Aspirin 324mg",
    "Nitroglycerin 0.4mg",
    "Morphine 2-4mg"
  ]
}

education_instructions:
Patient educated on the possibility of acute coronary syndrome and the need for urgent evaluation and treatment. Explained the importance of immediate testing, including EKG and blood work. Advised to report any changes in symptoms immediately. Discussed the potential need for cardiac catheterization based on initial results. Emphasized the importance of smoking cessation and provided brief counseling on its impact on heart health.

med_recon:
- Lisinopril (dosage not specified) - taken daily for hypertension
- Metformin (dosage not specified) - taken daily for diabetes
- Atorvastatin (dosage not specified) - taken daily for hyperlipidemia
- Aspirin 81mg - taken daily
- Clopidogrel (Plavix, dosage not specified) - taken daily

Patient reports good adherence to medication regimen and confirms taking all medications this morning.`,
    8: ``,
    9: ``,
    10: ``
}

export default panicNotes