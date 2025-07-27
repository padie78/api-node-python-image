from PIL import Image
import sys
import logging

logging.basicConfig(level=logging.INFO)

def crop_center(pil_img, crop_width, crop_height):
    img_width, img_height = pil_img.size
    logging.info("Original size: %sx%s", img_width, img_height)

    left = (img_width - crop_width) // 2
    top = (img_height - crop_height) // 2
    right = left + crop_width
    bottom = top + crop_height

    logging.info("Crop box: left=%s, top=%s, right=%s, bottom=%s", left, top, right, bottom)
    return pil_img.crop((left, top, right, bottom))

if __name__ == '__main__':
    input_path = sys.argv[1]
    output_path = input_path.replace(".png", "_cropped.png")

    logging.info("Processing: %s", input_path)

    try:
        img = Image.open(input_path)
        cropped = crop_center(img, 100, 100)
        cropped.save(output_path)
        logging.info("Saved cropped image to: %s", output_path)
        sys.stdout.buffer.write(output_path.getvalue())
    except Exception as e:
        logging.error("Error cropping image: %s", str(e))
