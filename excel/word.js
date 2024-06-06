function validateEnglish(str) {
    return str.split(' - ')[1];
}

const words = `abide by - (약속을) 지키다, 준수하다; 유사단어: obey, observe, follow, conform to, comply with, yield to, go by, keep to
account for - 1. 설명하다, 2. 차지하다, 3. 원인이 되다; 유사단어: explain, occupy, take up, answer for, be responsible for
take account of - 고려하다; 유사단어: consider, take into account, allow for, make allowance for, factor into
on account of - ~ 때문에; 유사단어: because of, owing to, due to
all at once - 갑자기; 유사단어: suddenly, all of a sudden, abruptly, out of the blue
a piece of cake - 쉽게 할 수 있는 일, 식은 죽 먹기; 유사단어: a breeze, a snap, a cakewalk
at (the) best - 잘해봐야, 기껏해야; 유사단어: at the maximum
at (the) least - 최소한, 적어도; 유사단어: not less than
be all ears - 귀를 기울이다
all thumbs - 서투른; 유사단어: clumsy, inept, maladroit
all but - 거의; 유사단어: almost, nearly, next to, ton to one
anything but - 결코 ~이 아닌; 유사단어: far from, never, not at all
nothing but - 단지; 유사단어: just, only
at one's wit's end - 어찌할 바를 몰라, 당황하여; 유사단어: at a loss, out of one's wits, 제정신을 잃어(잃은)
at a loss - 어찌할 바를 몰라; 유사단어: puzzled, perplexed, taken aback
at the mercy of - ~의 마음대로 되어; 유사단어: under the control of, in the power of
at the expense of - ~을 희생하면서, ~을 대가로; 유사단어: at the cost of
at the drop of a hat - 즉시, 즉각; 유사단어: immediately
bail out - (곤경에서)~을 구하다
beef out - 강화하다, 보강하다; 유사단어: bolster, reinforce, fortify, consolidate, intensify, strengthen
between ourselves - 우리끼리 이야기인데
be at home - 편안하다, 편안히 하다; 유사단어: be comfortable, feel at home
be immune from - ~을 면제받다; 유사단어: be exempt from, be free from
be eligible for - ~에 적격이다, 어울리다; 유사단어: be qualified for
be engaged in - ~에 종사하다, 관계하다; 유사단어: be involved in, be employed in
be fed up with - ~에 싫증나다; 유사단어: be tired of, be sick of, be bored with, be up to here with, have had it with
be cut out for - ~에 안성맞춤이다, ~에 적격이다
be devoid of - ~이 없다, ~이 결여되어 있다; 유사단어: be void of, be destitute of
be accustomed to - ~에 익숙하다; 유사단어: be used to ing
by and large - 주로, 대체로; 유사단어: on the whole, in general, for the most part, in the main
by leaps and bounds - 일사천리로, 급속하게, 엄청나게; 유사단어: like an arrow, in on time, very quickly, in large amount
brush up (on) - 다듬다, 복습하다, 다시 공부하다; 유사단어: clean up, review, go over
break the ice - 어색한 분위기를 깨다
behind the times - 구식의, 시대에 뒤진; 유사단어: old-fashioned, out-of-date, obsolete
beside the point - 핵심을 벗어난; 유사단어: off the subject, beside the mark, wide of the mark
beat around the bush - 돌려 말하다, 핵심을 말하지 않다; 유사단어: take around
break out - 발생하다, 갑자기 ~하기 시작하다; 유사단어: appear suddenly, break into
break down - 고장나다; 유사단어: broken, out of order, not work
break in - 말참견하다, 방해하다; 유사단어: interrupt, cut in, break into
by no means - 결코 ~이 아닌; 유사단어: not at all, never, on no account, under no circumstances, in no way
by all means - 꼭, 반드시; 유사단어: at all costs, whatever it may cost
bring forth - 생산하다, 낳다, 일으키다; 유사단어: produce, give birth to, cause
bring up - 기르다, 양육하다, 제기하다, 언급하다; 유사단어: nurse, rear, breed, raise, mention
bring about - ~을 가져오다, 야기하다; 유사단어: cause, give rise to
come across - 우연히 마주치다; 유사단어: run across, run into, bump into, meet by chance, encounter, come upon
comply with - 따르다, 순종하다; 유사단어: conform, abide by, go by, keep to, observe, follow, obey
coincide with - 일치하다, 동시에 일어나다; 유사단어: correspond with, synchronize with
come by - 획득하다, 얻다, 잠시 들르다; 유사단어: obtain, gain, acquire, procure, drop by, stop by
drop in - 잠시 (불쑥) 들르다; 유사단어: drop by, stop by, come by
carry out - 완성하다, 성취하다, 실행하다; 유사단어: accomplish, fulfill, achieve, complete, execute, implement, put into practice
call someone names - 욕설하다, 헐뜯다; 유사단어: abuse, slander, malign, speak ill of, insult
call it a day - (일과를) 마치다, 그만두다; 유사단어: call it quits, finish, let's call it a day, so much for today, let's call it quits
count on - 의존하다, ~에 달려있다; 유사단어: depend on, rely on, rest on, fall back on, lean on, hinge on, turn to, resort to, rest with
call off - 취소하다; 유사단어: cancel, recall, revoke, rescind, retract, recant
call for - 요청하다; 유사단어: 없음 (유사 표현이 명시되지 않음)
call on - 방문하다, 요구하다; 유사단어: look in on, visit, come round to, look up, ask
fall behind - 뒤처지다; 유사단어: lag behind
keep up with - ~에 뒤떨어지지 않다, 보조를 맞추다; 유사단어: keep pace with, keep abreast of
catch up with - 따라잡다; 유사단어: overtake
come up with - 내놓다, 제시하다; 유사단어: suggest, propose, bring up, put forth
come down with - (질병에) 걸리다; 유사단어: 없음 (유사 표현이 명시되지 않음)
put up with - 참다, 견디다; 유사단어: endure, tolerate, bear
make up with - ~와 화해하다; 유사단어: 없음 (유사 표현이 명시되지 않음)
cope with - 대처하다, 처리하다; 유사단어: manage, deal with, carry on
deal with - 다루다, 취급하다; 유사단어: handle, treat, cope with
care for - 1. 돌보다, 2. 좋아하다; 유사단어: look after, take care of, provide for, look out for
provide for - 1. 준비하다, 대비하다, 2. 부양하다, 3. 규정하다; 유사단어: take care of, care for
crack down on - 단속하다, 탄압하다; 유사단어: clamp down on
down-to-earth - 현실적인; 유사단어: practical, realistic
drop someone a line - 편지를 보내다; 유사단어: 없음 (유사 표현이 명시되지 않음)
dispose of - 처리하다, 제거하다; 유사단어: get rid of, do away with, throw away
do away with - 없애다, 폐지하다; 유사단어: abolish, get rid of, remove, discard, eliminate
get rid of - 제거하다; 유사단어: dispose of, obviate, eliminate
earn a living - 생활비를 벌다, 생계를 꾸리다; 유사단어: 없음 (유사 표현이 명시되지 않음)
eat one's words - 말한 것을 취소하다; 유사단어: withdraw one's statement
keep one's word - 약속을 지키다; 유사단어: 없음 (유사 표현이 명시되지 않음)
go back on - 1. (약속을) 어기다, 2. 철회하다, 취소하다; 유사단어: break one's word, revoke
enter into - 1. 시작하다, 진입하다, 2. ~에 참여하다, 관여하다; 유사단어: go into
every inch - 어느 모로 보나, 완전히, 속속들이; 유사단어: every bit, in every respect, completely, thoroughly
fall short of - ~이 부족하다; 유사단어: be insufficient
figure out - 1. 계산하다, 2. 이해하다, 3. 풀다; 유사단어: calculate, reckon, make out, solve
make out - 1. 이해하다, 2. 알아보다, 알아듣다; 유사단어: figure out, grasp, understand, apprehend
for good - 영원히, 이것을 마지막으로; 유사단어: permanently
for nothing - 1. 무료로, 2. 헛되이, 쓸모없이; 유사단어: free of charge, on the house, for free, in vain
get the picture - 상황을 이해하다; 유사단어: get the point
gain ground - 진보하다, 우세해지다, 기반을 잡다; 유사단어: prevail
get ahead - 출세하다; 유사단어: go up, go far, rise in the world
get along with - ~와 사이좋게 지내다; 유사단어: be on good terms with
be at odds with - ~와 어울리지 않다, ~와 상충하다; 유사단어: incongruent with
fall out with - ~와 사이가 틀어지다; 유사단어: 없음 (유사 표현이 명시되지 않음)
get even with - 보복하다, 앙갚음하다; 유사단어: take revenge on, retaliate, pay back, avenge
get the axe - 해고되다; 유사단어: get the pink slip, get dismissed, get fired
get cold feet - 겁먹다, 두려워지다; 유사단어: be timid, be afraid
give off - 방출하다, 내뿜다; 유사단어: emit, release, radiate
give a cold shoulder - 냉대하다, 피하다; 유사단어: shun
go over - 조사하다, 검토하다; 유사단어: examine, check, review, pore over
go through - 겪다, 경험하다, 살펴보다; 유사단어: undergo, experience, search, complete
get through - 끝내다, 마무리하다; 유사단어: wrap up, wind up, round off, terminate
get on - 타다, 탑승하다; 유사단어: board
get over - 1. 건너다, 2. 회복하다, 3. 극복하다; 유사단어: recover, pick up, get well, overcome, surmount
get the better of - 이기다, 꺾다; 유사단어: defeat, outwit
have the upper hand - 보다 우세하다, 유리하다; 유사단어: 없음 (유사 표현이 명시되지 않음)
give birth to - ~을 낳다, 생기게 하다; 유사단어: bring forth, bear
give rise to - ~의 원인이 되다, ~을 야기하다; 유사단어: trigger, bring about
give in - 굴복하다, 항복하다; 유사단어: succumb, submit, surrender
give up - 포기하다, 넘겨주다, 항복하다; 유사단어: abandon, relinquish, deliver
yield to - ~에 굴복하다; 유사단어: give in to
give vent to - (감정을) 표출하다; 유사단어: express
give way to - (감정) ~에 무너지다, ~으로 바뀌다; 유사단어: 없음 (유사 표현이 명시되지 않음)
hammer out - 해결하다, 풀다; 유사단어: unravel, iron out, work out, straighten out, solve, resolve, settle
hang up - 전화를 끊다; 유사단어: 없음 (유사 표현이 명시되지 않음)
have an eye for - ~에 대한 안목이 있다, ~을 잘 알다; 유사단어: have an ear for
have nothing to do with - ~와 관계없다; 유사단어: be irrelevant to, be foreign to
have one's hands full - 노는 손이 없다, 몹시 바쁘다; 유사단어: 없음 (유사 표현이 명시되지 않음)
have one's heart in one's mouth - 몹시 놀라다, 몹시 걱정하다, 안절부절못하다; 유사단어: 없음 (유사 표현이 명시되지 않음)
head off - 피하다, 방해하다, 가로막다; 유사단어: ward off, stave off, get around, avoid, avert, shun, intercept, preclude, forestall, prevent, obviate
steer clear of - ~을 피하다; 유사단어: 없음 (유사 표현이 명시되지 않음)
hit the ceiling - 화내다, 꾸짖다, 급등하다, 급증하다; 유사단어: lose one’s temper, go through the roof, fly off the handle, scold, soar, surge, skyrocket, proliferate
hit upon - ~을 생각해 내다, ~을 떠올리다; 유사단어: 없음 (유사 표현이 명시되지 않음)
hold back - 거둬들이다, 취소하다, 감추다, 숨기다, 삼가다, 제지하다, 억제하다; 유사단어: cancel, conceal, keep back, withhold, restrain, suppress
hold fast to - 단단히 붙들다, 집착하다, 고수하다; 유사단어: hang on to, stick to, cling, cleave, attach, keep
hold one's tongue - 침묵을 지키다; 유사단어: keep silent
hold water - 물이 새지 않다, 빈틈이 없다, 논리적이다; 유사단어: be consistent, reasonable, stand to reason, make sense
hot air - 허풍; 유사단어: brag, tall talk, big talk, exaggerated talk, heated air
hand down - 전수하다, 유산으로 남기다; 유사단어: pass down, transmit, pass on
hand in - 제출하다; 유사단어: turn in, submit
hand out - 나누어주다, 배포하다, 분배하다; 유사단어: distribute, dispense, give out, pass out
hand over - 넘겨주다, 양도하다; 유사단어: make over, turn over, give over, pass over
take over - 인계받다, 양도받다, 장악하다; 유사단어: 없음 (유사 표현이 명시되지 않음)
hold on - 계속하다, 전화를 끊지 않고 기다리다; 유사단어: persist, hang on
hold out - 견디다, 버티다, 지속하다, 계속하다; 유사단어: resist, withstand, endure, last, continue
hold over - 계속하다, 유임하다, 보류하다, 연기하다; 유사단어: postpone, delay, defer, suspend, put off, hold off, lay over`.split(`
`);


words.forEach(word => console.log(validateEnglish(word)))