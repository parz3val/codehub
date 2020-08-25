import PIL.Image

#globals
# ASCII characters to build the output text.
ASCII_CHR = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]

def img_resize(image, new_width=100):
    width, height = image.size
    ratio = height/width
    
    new_height = int(new_width * ratio )
    resized_image = image.resize((new_width, new_height))
    
    return resized_image

#convert each pixel in the image to greyscale
def greyscl(image):
    #taking PIL object and converting it into greyscale
    greyscale_image = image.convert("L")
    return greyscale_image
    
# Convert pixels into ASCII

def pix_to_ascii(image):
    pixels = image.getdata()
    #convert each pixels ino subsequent ASCII chars
    characters = "".join([ASCII_CHR[pixel//25] for pixel in pixels])
    return characters

    
def main(new_width=100):
    #attempt to open image from user
    path = input("Enter the valid pathname to image: \n")
    
    try:
        image = PIL.Image.open(path)
    except:
        print(path, " is not a valid pathname.")
        
    # Now converting image into ASCII
    new_img_data = pix_to_ascii(greyscl(img_resize(image)))
    
    #format the chars
    pixel_count = len(new_img_data)
    ascii_image = "\n".join(new_img_data[i:(i+new_width)] for i in range(0, pixel_count,new_width))
    #print the result
    print(ascii_image)
    
    #save the image to txt file
    with open("ascii_.txt","w") as f:
        f.write(ascii_image)

main(200)
