---
title: "Cosmetic Defect Inspection"
excerpt: "Apexella designed a system to help S customers detect subtle defects on high-end cosmetic bottles, optimize production quality inspection processes, and improve defect detection efficiency. The core technology used is a lightweight neural network detection model that can be deployed anywhere on the production line and run completely offline, supporting the expansion of detection defect types."
coverImage: "/assets/blog/hello-world/2000.png"
author:
  name:
ogImage:
  url: "/assets/blog/hello-world/2000.png"
---

The high-end cosmetics produced by S customer are very expensive, and even the bottles need to be presented perfectly to customers. The difficulty of cosmetic bottle inspection lies in that the transparent bottle body needs the assistance of specific lights to see defects, the production line lacks defect data, and the shape and color of the defects are uncertain.

In response to the above difficulties, Apexella helped customers design an auxiliary lighting device that can accurately capture images of defects through cameras. In order to solve the problem of lack of data, Apexella designed a virtual data expansion tool based on the pattern of existing data, adding a variety of defect data for training neural networks. At the same time, in order to make the model easily deployable at any location on the production line, Apexella designed a lightweight neural network and performed a distillation operation on the trained model, so that small models deployed on the end side can also have excellent performance.
