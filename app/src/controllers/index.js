"use strict"

const express =require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/",ctrl.output.home);
router.get("/login",ctrl.output.login);
router.get("/loginStatus",ctrl.process.loginStatus);
router.get("/signup/agreement",ctrl.output.agreement);
router.get("/signup",ctrl.output.signup);
router.get("/logout",ctrl.process.logout);
router.get("/mypage",ctrl.output.mypage);
router.get("/mypage/modify/1",ctrl.output.modifyNickname);//닉네임변경
router.get("/mypage/modify/2",ctrl.output.modifyPsword); //비밀번호변경
router.get("/mypage/withdrawal",ctrl.output.withdrawal);//회원탈퇴
router.get("/mypage/community/post/:category",ctrl.output.myCommunityPost)


//닉네임 변경
router.post("/mypage/modify/1",ctrl.process.modifyNickname)
//비밀번호 변경
router.post("/mypage/modify/2",ctrl.process.modifyPsword)
//회원 탈퇴
router.post("/mypage/withdrawal",ctrl.process.withdrawal)

//메일 인증
router.post("/auth/email",ctrl.process.emailAuth);
router.post("/register",ctrl.process.register);

// council 라우터
router.get("/council/:universityname",ctrl.result.council);
router.get("/post/:universityname/:category",ctrl.output.post);
router.post("/getUniversityName", ctrl.result.getUniversityName);
//router.post("/getImages", ctrl.result.getImages);



//
router.get("/showUniversityNameList/:university_name",ctrl.output.showUniversityNameList);
router.get("/showUniversityNameList",ctrl.output.showUniversityNameList);


// partner 라우터
router.get("/partner/:university_url",ctrl.output.partner);
router.get("/getUniversityID/:university_url",ctrl.partner.getUniversityID);
router.post("/getPartner",ctrl.partner.getPartner);
router.post("/getPartnerUni",ctrl.partner.getPartnerUni);
router.post("/getUniversityLocation",ctrl.partner.getUniversityLocation);
router.post("/uploadPartner",ctrl.partner.uploadPartnerStore);

router.get("/partnerUpdate/:university_url",ctrl.output.partnerForm);
router.get("/deleterStore/:storeID",ctrl.partner.DeletePartnerStore);

// retailer 라우터
router.get("/retailer/:university_url",ctrl.retailer.retailer);

// router.post("/login",ctrl.process.login);
//council 페이지 라우팅
// router.get("/sungshin\", ctrl.result.council);

//post 라우터
router.get("/postAll/:university_url",ctrl.post.postAll); //전체게시글 불러오기 API
router.get("/postform/:university_url",ctrl.output.postform);
router.get("/postviewer/:post_id",ctrl.output.postviewer);

router.get("/showPost/:post_id",ctrl.post.showPost);

router.post("/uploadPost",ctrl.post.uploadPost);
router.get("/showPostListbyCategory/:category/:university_url",ctrl.post.showPostListbyCategory);
router.get('/searchPost/:keyword',ctrl.post.searchPost);

router.get("/showPostListAll/:university_url",ctrl.output.post);

router.post("/mypage/community/post/:category",ctrl.post.myCommunityPost);


//댓글
router.get("/showComment/postviewer/:post_id",ctrl.comment.showCommentListbyPostID);//댓글 목록 보이기
router.post("/uploadComment/postviewer",ctrl.comment.uploadComment); //댓글 작성하기


module.exports=router;


