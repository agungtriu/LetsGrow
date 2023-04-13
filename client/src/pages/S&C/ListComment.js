import React from 'react'

const ListComment = () => {
  return (
    <>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-black bg-opacity-10 p-4 my-2 rounded-2" tabindex="0">
        <h6 id="scrollspyHeading1">First heading</h6>
        <p>
          "Wow, tumbuhan-tumbuhan ini sangat menakjubkan! Mereka memberikan banyak manfaat bagi kita dan lingkungan kita. Mari kita jaga kelestariannya dengan baik."
        </p>
        {/* <h6 id="scrollspyHeading2">Second heading</h6>
        <p>
          "Tumbuhan-tumbuhan ini sangat indah. Saya suka memandang bunga-bunga dan dedaunan yang berwarna-warni. Mereka membuat hari-hari saya menjadi lebih cerah."
        </p>
        <h6 id="scrollspyHeading3">Third heading</h6>
        <p>
          Saya suka berkebun dan menanam tumbuhan di halaman saya. Selain memberikan udara segar, mereka juga memberikan buah dan sayuran yang sehat dan lezat.
        </p>
        <h6 id="scrollspyHeading4">Fourth heading</h6>
        <p>
          Tumbuhan-tumbuhan ini memang luar biasa. Mereka bisa menyimpan air, mengurangi polusi, dan menghasilkan oksigen. Kita harus bersyukur memiliki tumbuhan di sekitar kita.
        </p>
        <h6 id="scrollspyHeading5">Fifth heading</h6>
        <p>
          Saya sangat menghargai tumbuhan-tumbuhan ini. Mereka adalah bagian penting dari ekosistem dan membantu menjaga keseimbangan alam. Tanpa mereka, dunia akan menjadi lebih miskin dan tidak seimbang
        </p> */}
        <div class="mb-3">
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Add your comments'></textarea>
          <button type="submit" class="btn btn-primary mb-3 my-2">submit</button>
        </div>
      </div>
    </>
  )
}

export default ListComment