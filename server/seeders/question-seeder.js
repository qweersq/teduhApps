'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Inserting sample data into the questions table
    await queryInterface.bulkInsert('questions', [
      {
        question: "Saya merasa bahwa diri saya menjadi marah karena hal-hal sepele.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa bibir saya sering kering.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya sama sekali tidak merasakan perasaan positif.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya mengalami kesulitan bernafas (misalnya: seringkali terengah-engah atau tidak dapat bernafas padahal tidak melakukan aktivitas fisik sebelumnya).",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya sepertinya tidak kuat lagi untuk melakukan sesuatu kegiatan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya cenderung bereaksi berlebihan terhadap suatu situasi.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa bahwa diri saya menjadi marah.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa goyah (misalnya, kaki terasa mau 'copot').",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa sulit untuk bersantai.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya menemukan diri saya berada dalam situasi yang membuat saya merasa sangat cemas dan saya akan merasa sangat lega jika semua ini berakhir.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa tidak ada hal yang diharapkan di masa depan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya menemukan diri saya mudah merasa kesal.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa telah menghabiskan banyak energi untuk merasa cemas.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa sedih dan tertekan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya menemukan diri saya menjadi tidak sabar ketika mengalami penundaan (misalnya: kemacetan lalu lintas, menunggu sesuatu).",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa lemas seperti mau pingsan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa kehilangan minat akan segala hal.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa bahwa saya tidak berharga menjadi seorang manusia.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa bahwa saya mudah tersinggung.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya berkeringat secara berlebihan (misalnya: tangan berkeringat), padahal temperatur tidak panas atau tidak melakukan aktivitas fisik sebelumnya.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa takut tanpa alasan yang jelas.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa hidup tidak bermanfaat.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa sulit untuk beristirahat.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya mengalami kesulitan dalam hal menelan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya tidak dapat merasakan kenikmatan dari berbagai hal yang saya lakukan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya menyadari kegiatan jantung, walaupun saya tidak melakukan aktivitas fisik (misalnya: berasa detak jantung meningkat atau melemah).",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa putus asa dan sedih.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa bahwa saya mudah marah.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa saya hampir panik.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa sulit untuk tenang setelah sesuatu membuat saya kesal.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya takut bahwa saya akan 'terhambat' oleh tugas-tugas sepele yang tidak bisa saya lakukan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya tidak merasa antusias dalam hal apapun.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya sulit untuk sabar dalam menghadapi gangguan terhadap hal yang sedang saya lakukan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya sedang merasa gelisah.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa bahwa saya tidak berharga.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya tidak dapat memaklumi hal apapun yang menghalangi saya untuk menyelesaikan hal sedang saya lakukan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa sangat ketakutan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya melihat tidak ada harapan untuk masa depan.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa bahwa hidup tidak berarti.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya menemukan diri saya mudah gelisah.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa khawatir dengan situasi saya mungkin menjadi panik dan mempermalukan diri sendiri.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa gemetar (misalnya: pada tangan).",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "Saya merasa sulit untuk meningkatkan inisiatif dalam melakukan sesuatu.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // Add more questions as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Removing inserted data from the questions table
    await queryInterface.bulkDelete('questions', null, {});
  }
};
