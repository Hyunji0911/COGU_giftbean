function GifticonForm() {
	return (
		<div>
			<header>header</header>
			<form>
				<label for="category-select">Category</label>
				<select
					name="categories"
					id="category-select">
					<option value="">--선택하콩--</option>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="hamster">Hamster</option>
					<option value="parrot">Parrot</option>
					<option value="spider">Spider</option>
					<option value="goldfish">Goldfish</option>
				</select>

				<label for="brand">브랜드명</label>
				<input
					type="text"
					id="brand"
					name="brand"
					required
					minlength="4"
					maxlength="8"
					size="10"></input>

				<label for="itemName">상품 이름</label>
				<input
					type="text"
					id="itemName"
					name="itemName"
					required
					minlength="4"
					maxlength="8"
					size="10"></input>

				<label for="barcode">바코드번호</label>
				<input
					type="number"
					id="barcode"
					name="barcode"
					required
					minlength="4"
					maxlength="8"
					size="10"></input>

				<label for="expirationDate">유효기간</label>
				<input
					type="date"
					id="expirationDate"
					name="expirationDate"
					required
					minlength="4"
					maxlength="8"
					size="10"></input>

				<label for="memo">메모</label>
				<input
					type="text"
					id="memo"
					name="memo"
					required
					minlength="4"
					maxlength="8"
					size="10"></input>
				<button>버튼</button>
			</form>
		</div>
	);
}

export default GifticonForm;
