// import { StudyTopic } from "../models/study-topics.model";

// export const STUDY_TOPICS: StudyTopic[] = [
//   {
//     id: 'percent',
//     title: 'Percent',
//     subject: 'math',
//     summary: [
//       'Percent means per hundred.',
//       'Used in increase, decrease, discount, profit, growth, and reverse percentage problems.',
//       'SPTG usually tests practical application rather than theory-heavy manipulation.'
//     ],
//     coreConcepts: [
//       'x% of y = (x/100) × y',
//       'Percentage change is relative to the original value',
//       'Successive percentage changes must be multiplied, not simply added',
//       'Increase and decrease by the same percentage do not cancel out'
//     ],
//     derive: [
//       '% = (part / whole) × 100',
//       'part = (% / 100) × whole',
//       'new value = old value × (1 ± rate)',
//       'reverse old value = new value / (1 ± rate)'
//     ],
//     formulas: [
//       'x% of y = (x/100)y',
//       '% increase = ((new - old) / old) × 100',
//       '% decrease = ((old - new) / old) × 100',
//       'successive multiplier = (1 + a)(1 + b)',
//       'after r% increase: new = old(1 + r/100)',
//       'after r% decrease: new = old(1 - r/100)'
//     ],
//     sptgSet: [
//       { question: 'What is 25% of 200?', answer: '50', difficulty: 'basic' },
//       { question: '40% of x = 80. Find x.', answer: '200', difficulty: 'basic' },
//       { question: 'A price increases from 100 to 130. Find the percentage increase.', answer: '30%', difficulty: 'basic' },
//       { question: 'Decrease 200 by 15%.', answer: '170', difficulty: 'intermediate' },
//       { question: 'Increase 500 by 20%.', answer: '600', difficulty: 'intermediate' },
//       { question: 'A price increases by 10% and then by 10% again. Find the total percentage increase.', answer: '21%', difficulty: 'intermediate' },
//       { question: 'A number increases by 20% and then decreases by 10%. Find the net change.', answer: '+8%', difficulty: 'advanced' },
//       { question: 'A price increased by 25%. By what percent must it decrease to return to the original price?', answer: '20%', difficulty: 'advanced' },
//       { question: 'A population grows by 10% each year for 2 years. Find the total growth.', answer: '21%', difficulty: 'advanced' },
//       { question: 'After a 20% discount, a product costs 80. Find the original price.', answer: '100', difficulty: 'advanced' }
//     ],
//     hardSet: [
//       { question: 'A price increases by 10%, then 20%, then decreases by 25%. Find the net percentage change.', answer: '-1%', difficulty: 'hard' },
//       { question: 'A quantity decreases by 20% and then increases by 25%. Find the net effect.', answer: 'No change', difficulty: 'hard' },
//       { question: 'A number increases by 50% and then decreases by 40%. Find the net effect.', answer: '-10%', difficulty: 'hard' },
//       { question: 'A price is doubled and then decreased by 50%. Compare the final price to the original.', answer: 'Same as original', difficulty: 'hard' },
//       { question: 'A number becomes 125 after a 25% increase. Find the original value.', answer: '100', difficulty: 'hard' },
//       { question: 'Apply successive increases of 5%, 10%, and 20%. Find the total increase.', answer: '38.6%', difficulty: 'hard' },
//       { question: 'A value decreases by x% and then increases by x%, giving a net loss of 9%. Find x.', answer: '30%', difficulty: 'hard' },
//       { question: 'A population decreases by 10% per year for 2 years. Find the total decrease.', answer: '19%', difficulty: 'hard' },
//       { question: 'Two groups grow by 20% and 30% respectively. Can you determine the combined average growth without weights?', answer: 'No', difficulty: 'hard' },
//       { question: 'Two equal percentage increases result in a total increase of 44%. Find each increase.', answer: '20%', difficulty: 'hard' }
//     ]
//   },
//   {
//     id: 'ratio-proportion',
//     title: 'Ratio & Proportion',
//     subject: 'math',
//     summary: [
//       'Ratio compares quantities.',
//       'Proportion states that two ratios are equal.',
//       'SPTG likes split, combine, and change-in-ratio problems.'
//     ],
//     coreConcepts: [
//       'a:b means a/b',
//       'Use k to represent ratio parts',
//       'If a:b = c:d, then ad = bc',
//       'To combine ratios, make the common term equal first'
//     ],
//     derive: [
//       'If A:B = 2:3, let A = 2k and B = 3k',
//       'If total = 50, then 5k = 50 so k = 10',
//       'If a/b = c/d, cross multiply to get ad = bc'
//     ],
//     formulas: [
//       'part = (ratio part / total ratio) × total',
//       'a:b = c:d => ad = bc',
//       'If A:B and B:C are given, equalize B before combining'
//     ],
//     sptgSet: [
//       { question: 'A:B = 2:3, total = 50. Find A.', answer: '20', difficulty: 'basic' },
//       { question: 'A:B:C = 1:2:3, total = 60. Find B.', answer: '20', difficulty: 'basic' },
//       { question: 'A:B = 4:5. If A = 20, find B.', answer: '25', difficulty: 'basic' },
//       { question: 'A:B = 2:3 and B:C = 4:5. Find A:C.', answer: '8:15', difficulty: 'intermediate' },
//       { question: 'Divide 100 in the ratio 2:3:5.', answer: '20, 30, 50', difficulty: 'intermediate' },
//       { question: 'A:B = 3:4, total = 140. Find A.', answer: '60', difficulty: 'intermediate' },
//       { question: 'A:B = 5:7, difference = 20. Find A.', answer: '50', difficulty: 'intermediate' },
//       { question: 'A:B = 2:3. After adding 10 to both, ratio becomes 3:4. Find A.', answer: '20', difficulty: 'advanced' },
//       { question: 'A:B = 3:5. After removing 6 from A, ratio becomes 1:2. Find A.', answer: '15', difficulty: 'advanced' },
//       { question: 'A:B = 4:5 and B:C = 6:7. Find A:B:C.', answer: '24:30:35', difficulty: 'advanced' }
//     ],
//     hardSet: [
//       { question: 'A:B = 3:4 and B:C = 5:6. Find A:C.', answer: '15:24', difficulty: 'hard' },
//       { question: 'A:B = 2:3, A+C = 50, B+C = 70. Find C.', answer: '10', difficulty: 'hard' },
//       { question: 'A:B = 4:5 and (A−10):(B−10) = 2:3. Find A.', answer: '40', difficulty: 'hard' },
//       { question: 'The ratio of boys to girls is 3:2. If 20% of boys leave, find the new ratio.', answer: '12:10 or 6:5', difficulty: 'hard' },
//       { question: 'A:B = 2:3. If A is doubled, find the new ratio.', answer: '4:3', difficulty: 'hard' },
//       { question: 'A:B:C = 2:3:5. Add 10 to each. Is the ratio preserved?', answer: 'No', difficulty: 'hard' },
//       { question: 'A:B = 3:4 and A+B = 140. After adding x to both, ratio becomes 4:5. Find x.', answer: '70', difficulty: 'hard' },
//       { question: 'A:B = 5:6 and (A+5):(B−5) = 1:1. Find A.', answer: '25', difficulty: 'hard' },
//       { question: 'A:B = 2:3, B:C = 3:4, C:D = 4:5. Find A:D.', answer: '2:5', difficulty: 'hard' },
//       { question: 'A:B = 3:5 and (A+10):(B+10) = 4:7. Find A.', answer: '30', difficulty: 'hard' }
//     ]
//   },
//   {
//     id: 'kinematics',
//     title: 'Kinematics',
//     subject: 'physics',
//     summary: [
//       'Kinematics describes motion without focusing on forces.',
//       'SPTG usually tests constant acceleration, free fall, and basic interpretation.'
//     ],
//     coreConcepts: [
//       'Acceleration is the rate of change of velocity',
//       'For constant acceleration, standard motion equations apply',
//       'Free fall is motion under gravity only'
//     ],
//     derive: [
//       'a = (v - u) / t => v = u + at',
//       'Average velocity = (u + v)/2 for constant acceleration',
//       's = average velocity × time => s = ((u + v)/2)t',
//       'Substitute v = u + at to get s = ut + (1/2)at²',
//       'Eliminate t to derive v² = u² + 2as'
//     ],
//     formulas: [
//       'v = u + at',
//       's = ut + (1/2)at²',
//       'v² = u² + 2as',
//       'average velocity = (u + v)/2',
//       's = vt - (1/2)at²',
//       'g ≈ 9.8 or 10 m/s²'
//     ],
//     sptgSet: [
//       { question: 'An object starts from rest with acceleration 10 m/s² for 2 s. Find v.', answer: '20 m/s', difficulty: 'basic' },
//       { question: 'A car moves at constant speed 10 m/s for 5 s. Find distance.', answer: '50 m', difficulty: 'basic' },
//       { question: 'An object is dropped from rest. Which acceleration acts on it?', answer: 'g downward', difficulty: 'basic' },
//       { question: 'u = 5 m/s, a = 2 m/s², t = 4 s. Find v.', answer: '13 m/s', difficulty: 'intermediate' },
//       { question: 'u = 0, a = 10 m/s², t = 3 s. Find s.', answer: '45 m', difficulty: 'intermediate' },
//       { question: 'A body slows from 20 m/s to 0 in 4 s. Find acceleration.', answer: '-5 m/s²', difficulty: 'intermediate' },
//       { question: 'u = 10 m/s, a = 2 m/s², s = 24 m. Find v.', answer: '14 m/s', difficulty: 'advanced' },
//       { question: 'An object is thrown upward at 20 m/s. Using g = 10 m/s², find time to highest point.', answer: '2 s', difficulty: 'advanced' },
//       { question: 'A train accelerates from 0 to 30 m/s in 10 s. Find average velocity.', answer: '15 m/s', difficulty: 'advanced' },
//       { question: 'A particle moves with u = 3 m/s, a = 4 m/s², t = 2 s. Find s.', answer: '14 m', difficulty: 'advanced' }
//     ],
//     hardSet: [
//       { question: 'A car accelerates from 10 m/s to 30 m/s over 100 m. Find acceleration.', answer: '4 m/s²', difficulty: 'hard' },
//       { question: 'A body moves with u = 20 m/s and decelerates at 2 m/s². Find stopping distance.', answer: '100 m', difficulty: 'hard' },
//       { question: 'A particle moves 5 s with u = 4 m/s and a = 2 m/s². Find final velocity and distance.', answer: 'v = 14 m/s, s = 45 m', difficulty: 'hard' },
//       { question: 'An object is thrown upward at 30 m/s. Find max height using g = 10 m/s².', answer: '45 m', difficulty: 'hard' },
//       { question: 'A car covers first half of distance at 20 m/s and second half at 30 m/s. Is average speed 25 m/s?', answer: 'No, it is 24 m/s', difficulty: 'hard' },
//       { question: 'A body starts from rest and covers 80 m in 4 s. Find acceleration.', answer: '10 m/s²', difficulty: 'hard' },
//       { question: 'u = 15 m/s, v = 5 m/s, a = -2 m/s². Find time and distance.', answer: 't = 5 s, s = 50 m', difficulty: 'hard' },
//       { question: 'A stone is dropped and reaches the ground in 3 s. Find height with g = 10 m/s².', answer: '45 m', difficulty: 'hard' },
//       { question: 'An object moves at 8 m/s for 3 s, then accelerates at 2 m/s² for 4 s. Find total distance.', answer: '56 m', difficulty: 'hard' },
//       { question: 'A train accelerates uniformly from 12 m/s to 20 m/s in 4 s. Find displacement.', answer: '64 m', difficulty: 'hard' }
//     ]
//   },
//   {
//     id: 'force-newton',
//     title: 'Force & Newton’s Laws',
//     subject: 'physics',
//     summary: [
//       'Force changes motion.',
//       'SPTG focuses on F = ma, weight, equilibrium, and simple tension/normal ideas.'
//     ],
//     coreConcepts: [
//       'Net force causes acceleration',
//       'If net force is zero, object is in equilibrium or constant velocity motion',
//       'Weight is the gravitational force on an object'
//     ],
//     derive: [
//       'Newton’s Second Law states net force is proportional to acceleration',
//       'Therefore, F = ma',
//       'Weight is the force due to gravity, so W = mg'
//     ],
//     formulas: [
//       'F = ma',
//       'W = mg',
//       'Net force = sum of all forces',
//       'If object is at rest or moves with constant velocity, net force = 0'
//     ],
//     sptgSet: [
//       { question: 'm = 2 kg, a = 5 m/s². Find F.', answer: '10 N', difficulty: 'basic' },
//       { question: 'An object is at rest. What is the net force?', answer: '0 N', difficulty: 'basic' },
//       { question: 'g is approximately equal to what?', answer: '9.8 or 10 m/s²', difficulty: 'basic' },
//       { question: 'Find weight of a 3 kg object using g = 10.', answer: '30 N', difficulty: 'intermediate' },
//       { question: 'If net force on a body is zero, what can you say about acceleration?', answer: 'Acceleration is zero', difficulty: 'intermediate' },
//       { question: 'A 4 kg mass accelerates at 3 m/s². Find net force.', answer: '12 N', difficulty: 'intermediate' },
//       { question: 'A 20 N force acts on a 5 kg mass. Find acceleration.', answer: '4 m/s²', difficulty: 'advanced' },
//       { question: 'A body of mass 2 kg has forces 10 N right and 4 N left. Find acceleration.', answer: '3 m/s² to the right', difficulty: 'advanced' },
//       { question: 'A hanging body has mass 6 kg. Find its weight using g = 10.', answer: '60 N', difficulty: 'advanced' },
//       { question: 'What happens if applied force equals friction?', answer: 'Net force is zero', difficulty: 'advanced' }
//     ],
//     hardSet: [
//       { question: 'A 5 kg object experiences forces 20 N right, 8 N left, and 2 N left. Find acceleration.', answer: '2 m/s² right', difficulty: 'hard' },
//       { question: 'A 10 kg body is pulled with 50 N and friction is 20 N. Find acceleration.', answer: '3 m/s²', difficulty: 'hard' },
//       { question: 'Find the net force needed to accelerate 12 kg at 2.5 m/s².', answer: '30 N', difficulty: 'hard' },
//       { question: 'A 40 N net force acts on a mass and gives 5 m/s² acceleration. Find mass.', answer: '8 kg', difficulty: 'hard' },
//       { question: 'A box is pushed right with 30 N and left with 18 N. Mass = 3 kg. Find acceleration.', answer: '4 m/s² right', difficulty: 'hard' },
//       { question: 'A body moves with constant velocity. Can forces still act on it?', answer: 'Yes, but net force must be zero', difficulty: 'hard' },
//       { question: 'A 2 kg object hangs motionless from a rope. Find rope tension using g = 10.', answer: '20 N', difficulty: 'hard' },
//       { question: 'A lift moves upward at constant velocity with a 50 kg person inside. Find apparent weight trend.', answer: 'Same as normal weight', difficulty: 'hard' },
//       { question: 'A 6 kg block has acceleration 2 m/s² left. Find net force.', answer: '12 N left', difficulty: 'hard' },
//       { question: 'If acceleration doubles while mass stays the same, what happens to force?', answer: 'Force doubles', difficulty: 'hard' }
//     ]
//   }
// ];