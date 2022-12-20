import React from "react";

function UserInfoEditPage() {
	return (
		<main>
			<div>이름</div>
			<input value="스푼0911" />
			<div>이메일</div>
			<input placeholder="hell_O_world@helloworld.com" />
			<div>비밀번호 변경</div>
			<input value="********" />
			<div>비밀번호 변경 확인</div>
			<input value="********"></input>

			<label for="category-select">만료 알림 설정</label>
			<select
				name="categories"
				id="category-select">
				<option value="">--선택하콩--</option>
				<option value="dog">7일</option>
				<option value="cat">3일</option>
				<option value="cat">설정안함</option>
			</select>

			<footer>등록하기</footer>
		</main>
	);
}

export default UserInfoEditPage;
