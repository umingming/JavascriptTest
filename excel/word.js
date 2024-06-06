function validateEnglish(str) {
    return str.split(' - ')[0];
}

const words = `abide by - (약속을) 지키다, 준수하다
obey - (약속을) 지키다, 준수하다
observe - (약속을) 지키다, 준수하다
follow - (약속을) 지키다, 준수하다
conform to - (약속을) 지키다, 준수하다
comply with - (약속을) 지키다, 준수하다
yield to - (약속을) 지키다, 준수하다
go by - (약속을) 지키다, 준수하다
keep to - (약속을) 지키다, 준수하다
account for - 1. 설명하다, 2. 차지하다, 3. 원인이 되다
explain - 설명하다
occupy - 차지하다
take up - 차지하다
answer for - 원인이 되다
be responsible for - 원인이 되다
take account of - 고려하다
consider - 고려하다
take into account - 고려하다
allow for - 고려하다
make allowance for - 고려하다
factor into - 고려하다
on account of - ~ 때문에
because of - ~ 때문에
owing to - ~ 때문에
due to - ~ 때문에
all at once - 갑자기
suddenly - 갑자기
all of a sudden - 갑자기
abruptly - 갑자기
out of the blue - 갑자기
a piece of cake - 쉽게 할 수 있는 일, 식은 죽 먹기
a breeze - 쉽게 할 수 있는 일
a snap - 쉽게 할 수 있는 일
a cakewalk - 쉽게 할 수 있는 일
at (the) best - 잘해봐야, 기껏해야

at the maximum - 잘해봐야, 기껏해야
at (the) least - 최소한, 적어도

not less than - 최소한, 적어도
be all ears - 귀를 기울이다

all thumbs - 서투른

clumsy - 서투른
inept - 서투른
maladroit - 서투른
all but - 거의

almost - 거의
nearly - 거의
next to - 거의
ton to one - 거의
anything but - 결코 ~이 아닌

far from - 결코 ~이 아닌
never - 결코 ~이 아닌
not at all - 결코 ~이 아닌
nothing but - 단지

just - 단지
only - 단지
at one's wit's end - 어찌할 바를 몰라, 당황하여

at a loss - 어찌할 바를 몰라
out of one's wits - 제정신을 잃어(잃은)
at a loss - 어찌할 바를 몰라

puzzled - 어찌할 바를 몰라
perplexed - 어찌할 바를 몰라
taken aback - 어찌할 바를 몰라
at the mercy of - ~의 마음대로 되어

under the control of - ~의 마음대로 되어
in the power of - ~의 마음대로 되어
at the expense of - ~을 희생하면서, ~을 대가로

at the cost of - ~을 희생하면서, ~을 대가로
at the drop of a hat - 즉시, 즉각

immediately - 즉시, 즉각
bail out - (곤경에서)~을 구하다

beef out - 강화하다, 보강하다

bolster - 강화하다
reinforce - 강화하다
fortify - 강화하다
consolidate - 강화하다
intensify - 강화하다
strengthen - 강화하다
between ourselves - 우리끼리 이야기인데
be at home - 편안하다, 편안히 하다

be comfortable - 편안하다
feel at home - 편안하다
be immune from - ~을 면제받다

be exempt from - ~을 면제받다
be free from - ~을 면제받다
be eligible for - ~에 적격이다, 어울리다

be qualified for - ~에 적격이다
be engaged in - ~에 종사하다, 관계하다

be involved in - ~에 종사하다
be employed in - ~에 종사하다
be fed up with - ~에 싫증나다

be tired of - ~에 싫증나다
be sick of - ~에 싫증나다
be bored with - ~에 싫증나다
be up to here with - ~에 싫증나다
have had it with - ~에 싫증나다
be cut out for - ~에 안성맞춤이다, ~에 적격이다

be devoid of - ~이 없다, ~이 결여되어 있다

be void of - ~이 없다
be destitute of - ~이 없다
be accustomed to - ~에 익숙하다

be used to - ~에 익숙하다
by and large - 주로, 대체로

on the whole - 주로
in general - 주로
for the most part - 주로
in the main - 주로
by leaps and bounds - 일사천리로, 급속하게, 엄청나게

like an arrow - 급속하게
in on time - 급속하게
very quickly - 급속하게
in large amount - 엄청나게
brush up (on) - 다듬다, 복습하다, 다시 공부하다

clean up - 다듬다
review - 복습하다
go over - 복습하다
break the ice - 어색한 분위기를 깨다

behind the times - 구식의, 시대에 뒤진

old-fashioned - 구식의
out-of-date - 구식의
obsolete - 구식의
beside the point - 핵심을 벗어난
off the subject - 핵심을 벗어난
beside the mark - 핵심을 벗어난
wide of the mark - 핵심을 벗어난
beat around the bush - 돌려 말하다, 핵심을 말하지 않다
take around - 돌려 말하다, 핵심을 말하지 않다
break out - 발생하다, 갑자기 ~하기 시작하다
appear suddenly - 발생하다, 갑자기 ~하기 시작하다
break into - 발생하다, 갑자기 ~하기 시작하다
break down - 고장나다
broken - 고장나다
out of order - 고장나다
not work - 고장나다
break in - 말참견하다, 방해하다
interrupt - 말참견하다, 방해하다
cut in - 말참견하다, 방해하다
break into - 말참견하다, 방해하다
by no means - 결코 ~이 아닌
not at all - 결코 ~이 아닌
never - 결코 ~이 아닌
on no account - 결코 ~이 아닌
under no circumstances - 결코 ~이 아닌
in no way - 결코 ~이 아닌
by all means - 꼭, 반드시
at all costs - 꼭, 반드시
whatever it may cost - 꼭, 반드시
bring forth - 생산하다, 낳다, 일으키다
produce - 생산하다
give birth to - 낳다
cause - 일으키다
bring up - 기르다, 양육하다, 제기하다, 언급하다
nurse - 기르다, 양육하다
rear - 기르다, 양육하다
breed - 기르다, 양육하다
raise - 기르다, 양육하다
mention - 제기하다, 언급하다
bring about - ~을 가져오다, 야기하다
cause - 야기하다
give rise to - 야기하다
come across - 우연히 마주치다
run across - 우연히 마주치다
run into - 우연히 마주치다
bump into - 우연히 마주치다
meet by chance - 우연히 마주치다
encounter - 우연히 마주치다
come upon - 우연히 마주치다
comply with - 따르다, 순종하다
conform - 따르다
abide by - 따르다
go by - 따르다
keep to - 따르다
observe - 따르다
follow - 따르다
obey - 순종하다
coincide with - 일치하다, 동시에 일어나다
correspond with - 일치하다
synchronize with - 동시에 일어나다
come by - 획득하다, 얻다, 잠시 들르다
obtain - 획득하다
gain - 획득하다
acquire - 획득하다
procure - 획득하다
drop by - 잠시 들르다
stop by - 잠시 들르다
drop in - 잠시 (불쑥) 들르다
drop by - 잠시 들르다
stop by - 잠시 들르다
come by - 잠시 들르다
carry out - 완성하다, 성취하다, 실행하다
accomplish - 완성하다, 성취하다
fulfill - 완성하다, 성취하다
achieve - 완성하다, 성취하다
complete - 완성하다
execute - 실행하다
implement - 실행하다
put into practice - 실행하다
call someone names - 욕설하다, 헐뜯다
abuse - 욕설하다
slander - 헐뜯다
malign - 헐뜯다
speak ill of - 헐뜯다
insult - 욕설하다
call it a day - (일과를) 마치다, 그만두다
call it quits - 그만두다
finish - 마치다
let's call it a day - (일과를) 마치다
so much for today - (일과를) 마치다
let's call it quits - 그만두다
count on - 의존하다, ~에 달려있다
depend on - 의존하다
rely on - 의존하다
rest on - 의존하다
fall back on - 의존하다
lean on - 의존하다
hinge on - 의존하다
turn to - 의존하다
resort to - 의존하다
rest with - ~에 달려있다
call off - 취소하다
cancel - 취소하다
recall - 취소하다
revoke - 취소하다
rescind - 취소하다
retract - 취소하다
recant - 취소하다
call for - 요청하다
call on - 방문하다, 요구하다
look in on - 방문하다
visit - 방문하다
come round to - 방문하다
look up - 방문하다
ask - 요구하다
fall behind - 뒤처지다
lag behind - 뒤처지다
keep up with - ~에 뒤떨어지지 않다, 보조를 맞추다
keep pace with - 보조를 맞추다
keep abreast of - 보조를 맞추다
catch up with - 따라잡다
overtake - 따라잡다
come up with - 내놓다, 제시하다
suggest - 제시하다
propose - 제시하다
bring up - 내놓다
put forth - 제시하다
come down with - (질병에) 걸리다
put up with - 참다, 견디다
endure - 견디다
tolerate - 참다
bear - 견디다
make up with - ~와 화해하다
cope with - 대처하다, 처리하다
manage - 대처하다
deal with - 처리하다
carry on - 처리하다
deal with - 다루다, 취급하다
handle - 다루다
treat - 취급하다
cope with - 다루다
care for - 돌보다, 좋아하다
look after - 돌보다
take care of - 돌보다
provide for - 돌보다
look out for - 돌보다
provide for - 준비하다, 대비하다, 부양하다, 규정하다
crack down on - 단속하다, 탄압하다
clamp down on - 단속하다
down-to-earth - 현실적인
practical - 현실적인
realistic - 현실적인
drop someone a line - 편지를 보내다
dispose of - 처리하다, 제거하다
get rid of - 제거하다
do away with - 제거하다
throw away - 제거하다
do away with - 없애다, 폐지하다
abolish - 폐지하다
get rid of - 없애다
remove - 없애다
discard - 없애다
eliminate - 없애다
get rid of - 제거하다
dispose of - 제거하다
obviate - 제거하다
eliminate - 제거하다
earn a living - 생활비를 벌다, 생계를 꾸리다
eat one's words - 말한 것을 취소하다
withdraw one’s statement - 말한 것을 취소하다
keep one's word - 약속을 지키다
go back on - (약속을) 어기다, 철회하다
break one's word - (약속을) 어기다
revoke - 철회하다
enter into - 시작하다, 참여하다
go into - 참여하다
every inch - 완전히, 속속들이
every bit - 완전히
in every respect - 완전히
completely - 완전히
thoroughly - 속속들이
fall short of - 부족하다
be insufficient - 부족하다
figure out - 계산하다, 이해하다, 풀다
calculate - 계산하다
reckon - 계산하다
make out - 이해하다, 알아보다
solve - 풀다
make out - 이해하다, 알아보다
figure out - 이해하다
grasp - 이해하다
understand - 이해하다
apprehend - 이해하다
for good - 영원히
permanently - 영원히
for nothing - 무료로, 헛되이
free of charge - 무료로
on the house - 무료로
for free - 무료로
in vain - 헛되이
get the picture - 상황을 이해하다
get the point - 상황을 이해하다
gain ground - 진보하다, 우세해지다
prevail - 우세해지다
get ahead - 출세하다
go up - 출세하다
go far - 출세하다
rise in the world - 출세하다
get along with - ~와 사이좋게 지내다
be on good terms with - ~와 사이좋게 지내다
be at odds with - ~와 어울리지 않다, ~와 상충하다
incongruent with - ~와 어울리지 않다
fall out with - ~와 사이가 틀어지다
get even with - 보복하다, 앙갚음하다
take revenge on - 보복하다
retaliate - 보복하다
pay back - 보복하다
avenge - 보복하다
get the axe - 해고되다
get the pink slip - 해고되다
get dismissed - 해고되다
get fired - 해고되다
get cold feet - 겁먹다, 두려워지다
be timid - 겁먹다
be afraid - 겁먹다
give off - 방출하다, 내뿜다
emit - 방출하다
release - 방출하다
radiate - 방출하다
give a cold shoulder - 냉대하다, 피하다
shun - 냉대하다
go over - 조사하다, 검토하다
examine - 조사하다
check - 조사하다
review - 검토하다
pore over - 검토하다
go through - 겪다, 경험하다, 살펴보다
undergo - 겪다
experience - 경험하다
search - 살펴보다
complete - 살펴보다
get through - 끝내다, 마무리하다
wrap up - 끝내다
wind up - 끝내다
round off - 끝내다
terminate - 끝내다
get on - 타다, 탑승하다
board - 타다
get over - 건너다, 회복하다, 극복하다
recover - 회복하다
pick up - 회복하다
get well - 회복하다
overcome - 극복하다
surmount - 극복하다
get the better of - 이기다, 꺾다
defeat - 이기다
outwit - 꺾다
have the upper hand - 보다 우세하다, 유리하다
give birth to - ~을 낳다, 생기게 하다
bring forth - 생기게 하다
bear - ~을 낳다
give rise to - ~의 원인이 되다, ~을 야기하다
trigger - 야기하다
bring about - 야기하다
give in - 굴복하다, 항복하다
succumb - 굴복하다
submit - 항복하다
surrender - 항복하다
give up - 포기하다, 넘겨주다, 항복하다
abandon - 포기하다
relinquish - 넘겨주다
deliver - 넘겨주다
yield to - 항복하다
yield to - ~에 굴복하다
give in to - ~에 굴복하다
give vent to - (감정을) 표출하다
express - 표출하다
give way to - (감정) ~에 무너지다, ~으로 바뀌다
hammer out - 해결하다, 풀다
unravel - 해결하다
iron out - 해결하다
work out - 해결하다
straighten out - 해결하다
solve - 풀다
resolve - 풀다
settle - 해결하다
hang up - 전화를 끊다
have an eye for - ~에 대한 안목이 있다, ~을 잘 알다
have an ear for - ~을 잘 알다
have nothing to do with - ~와 관계없다
be irrelevant to - ~와 관계없다
be foreign to - ~와 관계없다
have one's hands full - 노는 손이 없다, 몹시 바쁘다
have one's heart in one's mouth - 몹시 놀라다, 몹시 걱정하다, 안절부절못하다
head off - 피하다, 방해하다, 가로막다
ward off - 피하다
stave off - 피하다
get around - 피하다
avoid - 피하다
avert - 피하다
shun - 피하다
intercept - 가로막다
preclude - 방해하다
forestall - 방해하다
prevent - 방해하다
obviate - 방해하다
steer clear of - ~을 피하다
hit the ceiling - 화내다, 꾸짖다, 급등하다, 급증하다
lose one's temper - 화내다
go through the roof - 급등하다
fly off the handle - 화내다
scold - 꾸짖다
soar - 급등하다
surge - 급증하다
skyrocket - 급등하다
proliferate - 급증하다
hit upon - ~을 생각해 내다, ~을 떠올리다
hold back - 거둬들이다, 취소하다, 감추다, 숨기다, 삼가다, 제지하다, 억제하다
cancel - 취소하다
conceal - 감추다
keep back - 숨기다
withhold - 억제하다
restrain - 제지하다
suppress - 억제하다
hold fast to - 단단히 붙들다, 집착하다, 고수하다
hang on to - 단단히 붙들다
stick to - 고수하다
cling to - 집착하다
cleave to - 고수하다
attach to - 붙들다
keep to - 고수하다
hold one's tongue - 침묵을 지키다
keep silent - 침묵을 지키다
hold water - 물이 새지 않다, 빈틈이 없다, 논리적이다
be consistent - 논리적이다
reasonable - 논리적이다
stand to reason - 논리적이다
make sense - 논리적이다
hot air - 허풍
brag - 허풍
tall talk - 허풍
big talk - 허풍
exaggerated talk - 허풍
heated air - 허풍
hand down - 전수하다, 유산으로 남기다
pass down - 전수하다
transmit - 전수하다
pass on - 유산으로 남기다
hand in - 제출하다
turn in - 제출하다
submit - 제출하다
hand out - 나누어주다, 배포하다, 분배하다
distribute - 배포하다
dispense - 배포하다
give out - 나누어주다
pass out - 나누어주다
hand over - 넘겨주다, 양도하다
make over - 양도하다
turn over - 넘겨주다
give over - 넘겨주다
pass over - 넘겨주다
take over - 인계받다, 양도받다, 장악하다
hold on - 계속하다, 전화를 끊지 않고 기다리다
persist - 계속하다
hang on - 기다리다
hold out - 견디다, 버티다, 지속하다, 계속하다
resist - 견디다
withstand - 버티다
endure - 견디다
last - 지속하다
continue - 계속하다
hold over - 계속하다, 유임하다, 보류하다, 연기하다
postpone - 연기하다
delay - 연기하다
defer - 연기하다
suspend - 유임하다
put off - 연기하다
hold off - 연기하다
lay over - 보류하다

`.split(`
`);


words.forEach(word => {
    if (word) {
        console.log(validateEnglish(word));
    }
})